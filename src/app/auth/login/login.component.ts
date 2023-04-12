import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { Token } from '@angular/compiler';

// import{ToastrService}from 'ngx-toastr'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  //login: FormGroup | any;

  // constructor(private _http:HttpClient, private _route:Router){}
  // Cuentas = '';s

  // declaracion 
  token!:string;


  url = 'http://localhost:5000/login';
  constructor(private http: HttpClient,
    private auth: AuthService,
    private route: Router, private toastr: ToastrService) { }



  ngOnInit(): void {
    // this.login = new FormGroup({
    //   'email': new FormControl('', Validators.required),
    //   'password': new FormControl('', [Validators.required, Validators.email])
    // })


  }

  login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6),
    Validators.maxLength(15)])
  })

 
  logindata(login: FormGroup): void {

    let loginMask: any = {
      accessToken: '',
      user: {
        email: '',
        id: ''
      }
    };

  
   
      // const headers = new HttpHeaders({
          //   "Autorization:": `Bearer token`,
          //    "Content-Type": "application/json; charset=UTF-8",
          // })
      //   

    // this.http.post(this.url, this.login.value, httpOptions)

    this.auth.signUpV(this.login.value)
      .subscribe({
        next: (res) => {
          //console.log("Respuesta:  ", res.status);
          loginMask  = res
      
         
          // sessionStorage.setItem('accessToken', loginMask.accessToken);
          sessionStorage.setItem('rol', loginMask.user.rol);
          this.auth.storeToken(loginMask.accessToken)
          this.toastr.success(`Bienvenido ${loginMask.user.email}`,'Acceso Correcto');
          // console.log(loginMask.user)
          // console.log({httpOptions});
          // if(httpOptions)
          if(loginMask.user.rol==='admin'){
            this.route.navigate(['/admin']);
          }else{
          this.route.navigate(['/waiter']);
          }
        },
        error: (Error) => {
          //console.log("Error from json server auth: ", Error.error);
          if (Error.status === 400) {
            console.log(Error.status);
            this.toastr.error("Usuario y/o contraseña invalida", 'Autorizacion fallida');
          }


    // if(login.valid){

    // }

    this.http.post(this.url, this.login.value, httpOptions)
    .subscribe(res => {
        //console.log("Respuesta:  ", res.status);
        loginMask = res;
        console.log("Respuesta:  ", loginMask.accessToken);

        sessionStorage.setItem('token', loginMask.accessToken);
        sessionStorage.setItem('rol', loginMask.user.rol);
      //  this.auth.storeToken(loginMask.accesToken)
        this.toastr.success(`Bienvenido ${loginMask.user.email}`,'Acceso Correcto');
       // console.log(loginMask.user)
        if(loginMask.user.rol==='admin'){
          this.route.navigate(['/admin']);
        }else{
        this.route.navigate(['/waiter']);
        }
      }, Error => {
        //console.log("Error from json server auth: ", Error.error);
        if(Error.status===400){
          console.log(Error.status); 
          this.toastr.error("Usuario y/o contraseña invalida",'Autorizacion fallida');

        }
      })
      ;



  }
  get email(): FormControl {
    return this.login.get("email") as FormControl
  }
  get password(): FormControl {
    return this.login.get("password") as FormControl
  }

}
