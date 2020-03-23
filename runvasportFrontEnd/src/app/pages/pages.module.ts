import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PAGES_ROUTES } from './pages.route';
import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from './contact/contact.component';
import { CalendarComponent } from './calendar/calendar.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ClasificationsComponent } from './clasifications/clasifications.component';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ContactComponent,
        CalendarComponent,
        ClasificationsComponent,
        InscriptionComponent,
    ],
    exports: [
        DashboardComponent,
        ContactComponent,
        CalendarComponent,
        ClasificationsComponent,
        InscriptionComponent
    ],
    imports: [
        SharedModule,
        BrowserModule,
        PAGES_ROUTES,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory
          })
    ]
})
export class PagesModule { }
