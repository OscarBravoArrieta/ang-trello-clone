import { Component } from '@angular/core';
import { BtnComponent } from "../../components/btn/btn.component";

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    imports: [BtnComponent]
})
export class LoginComponent {

}
