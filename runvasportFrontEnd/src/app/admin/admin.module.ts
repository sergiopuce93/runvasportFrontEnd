import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { ADMIN_ROUTES } from './admin.route';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { TablonComponent } from './tablon/tablon.component';
import { CuponesComponent } from './cupones/cupones.component';
import { EventosComponent } from './eventos/eventos.component';


@NgModule({
    declarations: [
        AdminComponent,
        UsuariosComponent,
        TablonComponent,
        CuponesComponent,
        EventosComponent
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
