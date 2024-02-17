import { Component } from '@angular/core';
import { BtnComponent } from "../btn/btn.component";
import {OverlayModule} from '@angular/cdk/overlay'

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    imports: [BtnComponent, OverlayModule]
})
export class NavbarComponent {

     isOpen = false;
     email = "oscarbravo@gmail.com"

}
