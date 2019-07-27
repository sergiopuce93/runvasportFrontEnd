import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { TablonComponent } from './tablon/tablon.component';
import { EventosComponent } from './eventos/eventos.component';
import { CuponesComponent } from './cupones/cupones.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const adminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            { path: '', component: TablonComponent },
            { path: 'eventos', component: EventosComponent },
            { path: 'cupones', component: CuponesComponent },
            { path: 'usuarios', component: UsuariosComponent },
            { path: '', redirectTo: '/admin', pathMatch: 'full' },
        ]
    }
];

export const ADMIN_ROUTES = RouterModule.forChild( adminRoutes );
