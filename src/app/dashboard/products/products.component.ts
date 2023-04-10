import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productsData !: any;
  idProduct!: number;
  constructor(private api: ApiService, private auth: AuthService) { }

  ngOnInit(): void {
    this.getAllProducts()

  }

  getAllProducts() {
    this.api.getAllProduct()
      .subscribe(res => {
        this.productsData = res;
      })
  }
  onDelete(row: any) {
    this.idProduct = row.id
    console.log(this.idProduct);
  }
  deleteProduct(id: number) {

    id = this.idProduct
    // console.log(row.id);
    console.log(id);

    this.api.deleteProducts(id)
      .subscribe(res =>
        this.getAllProducts()
      )
  }
  logout() {
    this.auth.signOut();
  }




}