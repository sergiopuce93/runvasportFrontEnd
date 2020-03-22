import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
    declarations: [
        PagenotfoundComponent,
        HeaderComponent,
        FooterComponent,
        NavbarComponent
    ],
    exports: [
        PagenotfoundComponent,
        HeaderComponent,
        FooterComponent,
        NavbarComponent
    ]
})
export class SharedModule { }
