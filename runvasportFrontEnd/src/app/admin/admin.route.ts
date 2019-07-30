import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { TablonComponent } from './tablon/tablon.component';
import { EventosComponent } from './eventos/eventos.component';
import { CuponesComponent } from './cupones/cupones.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NuevoEventoComponent } from './eventos/nuevo-evento/nuevo-evento.component';
import { NuevoCuponComponent } from './cupones/nuevo-cupon/nuevo-cupon.component';
import { NuevoUsuarioComponent } from './usuarios/nuevo-usuario/nuevo-usuario.component';

const adminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            { path: '', component: TablonComponent },
            { path: 'eventos',component: EventosComponent,},
            { path: 'eventos/nuevo',component: NuevoEventoComponent,},
            { path: 'cupones', component: CuponesComponent },
            { path: 'cupones/nuevo',component: NuevoCuponComponent,},
            { path: 'usuarios', component: UsuariosComponent },
            { path: 'usuarios/nuevo',component: NuevoUsuarioComponent,},
            { path: '', redirectTo: '/admin', pathMatch: 'full' },
        ]
    }
];

export const ADMIN_ROUTES = RouterModule.forChild( adminRoutes );
