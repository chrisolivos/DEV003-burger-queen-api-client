import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../../shared/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { ProductModel } from '../products/product-model';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {
  breakfasData !: any[];
  breakfasData2 !: any;
  filterText: string =''
  filterProducts: ProductModel[]=[]


  // urlProducts = 'http://localhost:5000/products';

  constructor(private route: Router, private http: HttpClient,
    private api: ApiService, private auth: AuthService) {

   
  }

  ngOnInit(): void {
    this.getAllBreakfast();
  }

  getAllBreakfast() {
    this.api.getAllProduct()
      .subscribe(res => {
        //  console.log(res);
        this.breakfasData = res;
        // this.filterProducts = res
       
        
    
      })
  }

  getFilterProduct(type:string) {
    
    this.filterProducts=[]
        // this.breakfasData.filter(workorder => workrder.timestamp > 123456786) 
        console.log(this.breakfasData);
        // this.breakfasData.filter(workorder => workrder.timestamp > 123456786) 
        // console.log(this.filterProducts);

        for (let i = 0; i < this.breakfasData.length; i++) {
          if (this.breakfasData[i].type === type) {
            // nuevo array con lo filtrado y esto mostrar
            console.log("Funciona el type", this.breakfasData[i]);
           this.filterProducts.push(this.breakfasData[i])
         
          }
      }
      console.log(this.filterProducts);
    }}
    
     