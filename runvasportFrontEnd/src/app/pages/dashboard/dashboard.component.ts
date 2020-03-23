import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventoService } from 'src/app/services/evento.service';
import { Evento } from 'src/app/interfaces/event.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // Variables
  subscriptions: Subscription[] = [];
  listEvents: Evento[] = [];
  search: String;

  // Constructor
  constructor(private eventoService: EventoService) { }

  /**
   * Init load
   */
  ngOnInit() {
    this.getEvents();
  }

  /**
   * Destroy subscription
   */
  ngOnDestroy() {
    this.subscriptions.forEach(element => {
      element.unsubscribe();
    })
  }

  /**
   * Get all events
   */
  getEvents() {
    this.listEvents = [];
    this.subscriptions.push(
      this.eventoService.getAllEvents().subscribe(response => {
        console.log(response);
        this.listEvents = response;
      })
    );
  }


}
