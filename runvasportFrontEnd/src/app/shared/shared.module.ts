import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
    declarations: [
        PagenotfoundComponent,
        HeaderComponent,
        FooterComponent
    ],
    exports: [
        PagenotfoundComponent,
        HeaderComponent,
        FooterComponent
    ]
})
export class SharedModule { }
