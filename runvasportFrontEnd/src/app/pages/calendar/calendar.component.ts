import {
  Component,
  ChangeDetectorRef,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
// As an alternative to rrule there is also rSchedule
// See https://github.com/mattlewis92/angular-calendar/issues/711#issuecomment-418537158 for more info
import RRule from 'rrule';

import {
  CalendarDayViewBeforeRenderEvent,
  CalendarEvent,
  CalendarMonthViewBeforeRenderEvent,
  CalendarView,
  CalendarWeekViewBeforeRenderEvent
} from 'angular-calendar';
import { colors } from '../../../assets/color';
import { ViewPeriod } from 'calendar-utils';
import * as moment from 'moment';
import { EventoService } from '../../services/evento.service';
import { Evento } from 'src/app/interfaces/event.interface';
import { timeout } from 'rxjs/operators';

interface RecurringEvent {
  title: string;
  color: any;
  rrule?: {
    freq: any;
    bymonth?: number;
    bymonthday?: number;
    byweekday?: any;
  };
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  @Input() locale: string = 'en';

  @Output() viewChange: EventEmitter<string> = new EventEmitter();

  @Output() viewDateChange: EventEmitter<Date> = new EventEmitter();
  view: CalendarView = CalendarView.Month;

  viewDate = moment().toDate();
  listEvents: Evento[] = [];
  recurringEvents: RecurringEvent[] = [];

  calendarEvents: CalendarEvent[] = [];

  viewPeriod: ViewPeriod;

  constructor(private cdr: ChangeDetectorRef, private eService: EventoService) {
  }

  async ngOnInit() {
    await this.getEvents();
    setTimeout(() => {
      this.fillEvents();
    },2000);
  }

  async getEvents() {
    await this.eService.getAllEvents().subscribe(response => {
      response.forEach(element => {
        this.listEvents.push(element);
      });
    });
  }

  fillEvents() {
    this.listEvents.forEach(event => {
      const recurringEvent: RecurringEvent =
      {
        title: '',
        color: 'purple',
        rrule: {
          freq: RRule.DAILY,
          bymonthday: null,
        }
      };
      recurringEvent.title = event.name;
      recurringEvent.rrule.bymonthday = moment(event.dateIni).day();
      recurringEvent.rrule.bymonth = moment(event.dateIni).month();
      this.recurringEvents.push(recurringEvent);
    });
  }

  updateCalendarEvents(
    viewRender:
      | CalendarMonthViewBeforeRenderEvent
      | CalendarWeekViewBeforeRenderEvent
      | CalendarDayViewBeforeRenderEvent
  ): void {
    if (
      !this.viewPeriod ||
      !moment(this.viewPeriod.start).isSame(viewRender.period.start) ||
      !moment(this.viewPeriod.end).isSame(viewRender.period.end)
    ) {
      this.viewPeriod = viewRender.period;
      this.calendarEvents = [];

      this.recurringEvents.forEach(event => {
        const rule: RRule = new RRule({
          ...event.rrule,
          dtstart: moment(viewRender.period.start)
            .startOf('day')
            .toDate(),
          until: moment(viewRender.period.end)
            .endOf('day')
            .toDate()
        });
        const { title, color } = event;

        rule.all().forEach(date => {
          this.calendarEvents.push({
            title,
            color,
            start: moment(date).toDate()
          });
        });
      });
      this.cdr.detectChanges();
    }
  }
}
