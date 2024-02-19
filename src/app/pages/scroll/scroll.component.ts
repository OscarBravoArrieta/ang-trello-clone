 import { Component, inject } from '@angular/core'
 import { HttpClient } from '@angular/common/http'
 import { NavbarComponent } from "../../components/navbar/navbar.component"
 import { ScrollingModule } from '@angular/cdk/scrolling'

 interface Product {
     id: string;
     title: string;
     price: number;
     images: string[];
 }

 @Component({
    selector: 'app-scroll',
    standalone: true,
    templateUrl: './scroll.component.html',
    imports: [NavbarComponent, ScrollingModule]
})
 export class ScrollComponent {

     http = inject(HttpClient)
     products: Product[] = []

     ngOnInit(): void {
         this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
             .subscribe(data => {
                 this.products = data;
             })
     }

 }
