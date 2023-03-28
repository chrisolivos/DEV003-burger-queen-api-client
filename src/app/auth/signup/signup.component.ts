import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import {  ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  url = 'http://localhost:5000/users';
  constructor(private http: HttpClient, 

    private route: Router, private toastr: ToastrService) {
    // this.http.get(this.url).toPromise().then(data => {
    //   // console.log(data);
    //   this.Cuentas = JSON.stringify(data);

    // })
  }

  
  ngOnInit(): void {
  
  
  }
  signup = new FormGroup({
    'email': new FormControl(),
    'password': new FormControl(),
    'rol': new FormControl(),
    'adminaccess': new FormControl()
    
  });
  signupdata(signup:FormGroup){
  //  console.log(signup.value);

    // let userMask: any = {
    //   accessToken: '',
    //   user: {
    //     email: '',
    //     id: ''
    //   }
    // };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }
      )
    };

    this.http.post(this.url, this.signup.value, httpOptions).
      subscribe(res => {
        console.log("Respuesta:  ", res);
      //   loginMask = res;
      //   console.log("Respuesta:  ", loginMask.accessToken);

      //   sessionStorage.setItem('token', loginMask.accessToken);
      //   this.toastr.success(`Bienvenido ${loginMask.user.email}`,'Acceso Correcto');
      //   this.route.navigate(['/orders']);
      // }, Error => {
      //   //console.log("Error from json server auth: ", Error.error);
      //   this.toastr.error(Error.error,'Error');
      }
      )
      ;
  }
  
  }