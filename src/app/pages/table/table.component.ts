 import { Component, inject } from '@angular/core'
 import { CdkTableModule } from '@angular/cdk/table'
 import { HttpClient } from '@angular/common/http'
 import { CommonModule } from '@angular/common'
 import { DataSourceProduct } from './data-source'

 import { Product } from '../../models/product.model'
 import { NavbarComponent } from "../../components/navbar/navbar.component";
 import { BtnComponent } from "../../components/btn/btn.component";

 @Component({
    selector: 'app-table',
    standalone: true,
    templateUrl: './table.component.html',
    imports: [NavbarComponent, CdkTableModule, CommonModule, BtnComponent]
})
 export class TableComponent {

     http = inject(HttpClient)

     dataSource = new DataSourceProduct()
     columns: string[] = ['#No', 'Name', 'price', 'cover', 'actions']
     total = 0

     ngOnInit(): void {
         this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
         .subscribe(data => {
             this.dataSource.init(data)
         })
     }

     update(product: Product) {

         this.dataSource.update(product.id, { price: 20})

     }




 }
