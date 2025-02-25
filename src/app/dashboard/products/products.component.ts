import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import { Products } from '../orders/order.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productsData !: any;
  btnactualizar: Boolean = false;
  btnregistrar: Boolean = true;
  idProduct !: number;
  constructor(private api: ApiService, private auth: AuthService) { }
  ngOnInit(): void {
    this.getAllProducts()
  }
  onDelete(rowId: any) {
    this.idProduct = rowId.id
    //console.log(this.idProduct)
  }
  getAllProducts() {
    this.api.getAllProduct()
      .subscribe(res => {
        this.productsData = res;
      })
  }
  logout() {
    this.auth.signOut();
  }
  productsForm = new FormGroup({
    //nombre de la BD 
    'name': new FormControl('', [Validators.required, Validators.email]),
    'price': new FormControl('', [Validators.required]),
    'image': new FormControl('', [Validators.required]),
    'type': new FormControl('', [Validators.required]),
    'dateEntry': new FormControl(new Date()) // yyyy-MM-dd HH:mm:ss
  });
  products(productsForm: FormGroup) {
    this.btnregistrar = true;
    this.btnactualizar = false;
    this.api.addAllProduct(productsForm.value).subscribe(res => {
      // console.log("Respuesta:  ", res);
      this.productsForm.reset()
      this.getAllProducts()
    });
  }
  product!: Products;
  onEditProducts(row: any) {
    // data al dar click en editar
    this.productsForm.controls['name'].setValue(row.name);
    this.productsForm.controls['price'].setValue(row.price);
    this.productsForm.controls['image'].setValue(row.image)
    this.productsForm.controls['type'].setValue(row.type);
    this.productsForm.controls['dateEntry'].setValue(new Date());
    this.idProduct = row.id;
    this.btnactualizar = true;
    this.btnregistrar = false;
  }
  //row -- se refire a la fila de la tabla
  deleteProduct() {
    // console.log(this.idProduct);
    this.api.deleteProduct(this.idProduct)
      .subscribe(res => {
        //   alert( 'Empleado borrado')
        this.getAllProducts()
      })
  }
  updateProducts() {
    this.api.updateProduct(this.productsForm.value, this.idProduct)
      .subscribe(res => {
        this.productsForm.reset()
        this.getAllProducts()
      })
  }
  btnCancel() {
    this.btnactualizar = false;
    this.btnregistrar = true;
    this.productsForm.reset()
  }
}