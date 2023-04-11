import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

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


  url = 'http://localhost:5000/login';
  constructor(private http: HttpClient,
    private auth: AuthService,
    private route: Router, private toastr: ToastrService) { }



  ngOnInit(): void {
  }

  login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6),
    Validators.maxLength(15)])
  })

  logindata(login: FormGroup) {

    let loginMask: any = {
      accessToken: '',
      user: {
        email: '',
        id: ''
      }
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
     //   'Authorization': `Bearer ${sessionStorage.getItem('token')}`
      }
      )
    };
  //  const requestOptions = { headers: sessionStorage.getItem('token') };
    // this.http.get(this.url, this.requestOptions)
    //     .subscribe((res: any) => {
    //         console.log(res);
    //     });
    //}

    // if(login.valid){

    // }

    this.http.post(this.url, this.login.value, httpOptions)
      .subscribe(res => {
        //console.log("Respuesta:  ", res.status);
        loginMask = res;
           console.log("Token: ", loginMask.accessToken);

        sessionStorage.setItem('rol', loginMask.user.rol);
        sessionStorage.setItem('token', loginMask.accessToken);
        //this.auth.storeToken(loginMask.accesToken)
        //console.log(this.auth.storeToken(loginMask.accesToken));
        //console.log("sessionStorage: ", sessionStorage);
        this.toastr.success(`Bienvenido ${loginMask.user.email}`, 'Acceso Correcto');
      //   console.log(sessionStorage.getItem('rol'));
        if (loginMask.user.rol === 'admin') {
          this.route.navigate(['/admin']);
        } else {
          this.route.navigate(['/waiter']);
        }
      }, Error => {
        //console.log("Error from json server auth: ", Error.error);
        if (Error.status === 400) {
          console.log(Error.status);
          this.toastr.error("Usuario y/o contraseña invalida", 'Autorizacion fallida');
        }

      });



  }
  get email(): FormControl {
    return this.login.get("email") as FormControl
  }
  get password(): FormControl {
    return this.login.get("password") as FormControl
  }

  private checktoken(): void { }
}
