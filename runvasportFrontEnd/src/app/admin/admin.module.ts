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
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
    declarations: [
        AdminComponent,
        UsuariosComponent,
        TablonComponent,
        CuponesComponent,
        EventosComponent,
        NuevoEventoComponent,
        NuevoCuponComponent,
        NuevoUsuarioComponent,

    ],
    exports: [
        UsuariosComponent,
        TablonComponent,
        CuponesComponent,
        EventosComponent,
    ],
    imports: [
        ADMIN_ROUTES,
        BrowserModule,
        CommonModule,
        Ng2SearchPipeModule,
        FormsModule,
        NgxEchartsModule,
    ]
})
export class AdminModule { }
