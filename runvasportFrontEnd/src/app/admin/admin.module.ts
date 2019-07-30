import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { ADMIN_ROUTES } from './admin.route';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { TablonComponent } from './tablon/tablon.component';
import { CuponesComponent } from './cupones/cupones.component';
import { EventosComponent } from './eventos/eventos.component';
import { NuevoEventoComponent } from './eventos/nuevo-evento/nuevo-evento.component';
import { NuevoCuponComponent } from './cupones/nuevo-cupon/nuevo-cupon.component';
import { NuevoUsuarioComponent } from './usuarios/nuevo-usuario/nuevo-usuario.component';


@NgModule({
    declarations: [
        AdminComponent,
        UsuariosComponent,
        TablonComponent,
        CuponesComponent,
        EventosComponent,
        NuevoEventoComponent,
        NuevoCuponComponent,
        NuevoUsuarioComponent
    ],
    exports: [
        UsuariosComponent,
        TablonComponent,
        CuponesComponent,
        EventosComponent
    ],
    imports: [
        ADMIN_ROUTES
    ]
})
export class AdminModule { }
