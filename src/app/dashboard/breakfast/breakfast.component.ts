import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../../shared/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent {
  breakfasData !: any;
  breakfasData2 !: any;
  // let breakfasData: any = {
  //   accessToken: '',
  //   user: {
  //     email: '',
  //     id: ''
  //  }

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
      //   this.pocionesMana = this.pociones.filter(pocion => pocion.tipo.toString() === 'MANA');
        console.log(this.breakfasData);
        for(let i=0; i<this.breakfasData.length;i++){
        if(this.breakfasData[i].type==='Desayuno'){
          // nuevo array con lo filtrado y esto mostrar 
          console.log(this.breakfasData[i]);
          
        }
      }
      })
  }
}
