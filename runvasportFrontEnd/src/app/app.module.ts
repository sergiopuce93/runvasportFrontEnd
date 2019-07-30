import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { APP_ROUTES } from './app.route';
import { PagesModule } from './pages/pages.module';
import { AdminModule } from './admin/admin.module';
import { EventoService } from './services/evento.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    AdminModule,
    HttpClientModule
  ],
  providers: [EventoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
