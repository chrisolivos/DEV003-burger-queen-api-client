import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { LoginMask } from 'src/app/interfaces/loginMask.interfaces';

// import{ToastrService}from 'ngx-toastr'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {


  // Declaracion de variables 
  hide: boolean = true;
  url = 'http://localhost:5000/login';

  constructor(private http: HttpClient,
    private auth: AuthService,
    private route: Router, private toastr: ToastrService) { }



  ngOnInit(): void {

  }

  //Creacion de formulario reactivo
  login = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6),
    Validators.maxLength(15)])
  })

  togglePassword(): void {
    this.hide = !this.hide;
  }
  //Funcion de submit del formulario
  logindata(login: FormGroup) {

    let loginMask: any = {
      accessToken: '',
      user: {
        adminaccess: false,
        email: '',
        id: '',
        rol: ''
      }
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }
      )
    };



    this.http.post(this.url, this.login.value, httpOptions)
      .subscribe({
       
        next: (res) => {
         
          loginMask= res;
          console.log("Respuesta:  ",  loginMask);
          sessionStorage.setItem('token', loginMask.accessToken);
          sessionStorage.setItem('rol', loginMask.user.rol);
          sessionStorage.setItem('userId', loginMask.user.id);
          this.toastr.success(`Bienvenido ${loginMask.user.email}`, 'Acceso Correcto');

          if (loginMask.user.rol === 'admin') {
            this.route.navigate(['/admin']);
          }
          if (loginMask.user.rol === 'mesero') {
            this.route.navigate(['/waiter']);
          }
          if (loginMask.user.rol === 'cheff') {
            this.route.navigate(['/cheff']);
          }
        }, error: (error) => {

          if (error.status === 400) {
            this.toastr.error("Usuario y/o contraseña invalida", 'Autorizacion fallida');
          }

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