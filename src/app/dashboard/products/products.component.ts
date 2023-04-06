import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productsData !:any;
  constructor( private api: ApiService, private auth: AuthService) {}

ngOnInit(): void {
  this.getAllProducts()
  
 }

 getAllProducts(){
  this.api.getAllProduct()
  .subscribe(res=>{
    this.productsData = res;
  })
 }
logout(){
  this.auth.signOut();
}
}