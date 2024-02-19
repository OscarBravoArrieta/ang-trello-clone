 import { Component } from '@angular/core'
 import { CommonModule } from '@angular/common'
 import { RouterOutlet } from '@angular/router'
<<<<<<< HEAD

=======
 import { OverlayModule } from '@angular/cdk/overlay'
 import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
>>>>>>> 1f070ea754c0a7d6e00bab98ee9687d0d99aa5c9

 @Component({
     selector: 'app-root',
     standalone: true,
<<<<<<< HEAD
     imports: [CommonModule, RouterOutlet],
=======
     imports: [CommonModule, RouterOutlet, OverlayModule, FontAwesomeModule],
>>>>>>> 1f070ea754c0a7d6e00bab98ee9687d0d99aa5c9
     templateUrl: './app.component.html',
     styleUrl: './app.component.scss'
 })
 export class AppComponent {
    title = 'trello-clone'
 }
