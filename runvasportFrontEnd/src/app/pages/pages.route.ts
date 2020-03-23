import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ClasificationsComponent } from './clasifications/clasifications.component';
import { ContactComponent } from './contact/contact.component';



const pagesRoutes: Routes = [
    {
        path: 'home',
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'calendar', component: CalendarComponent },
            { path: 'organ', component: ClasificationsComponent },
            { path: 'contact', component: ContactComponent },
            { path: '', redirectTo: '/home', pathMatch: 'full' }
        ]
    }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
