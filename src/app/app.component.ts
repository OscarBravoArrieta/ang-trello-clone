 import { Component } from '@angular/core'
 import { CommonModule } from '@angular/common'
 import { RouterOutlet } from '@angular/router'
 import { OverlayModule } from '@angular/cdk/overlay'
 //import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

 @Component({
     selector: 'app-root',
     standalone: true,
     imports: [CommonModule, RouterOutlet, OverlayModule],
     templateUrl: './app.component.html',
     styleUrl: './app.component.scss'
 })
 export class AppComponent {
    title = 'trello-clone'
 }
