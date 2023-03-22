
import { Component, OnInit } from '@angular/core';
import{FormControl, FormGroup,  Validators}from '@angular/forms'
import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup|any;
  // constructor(private _http:HttpClient, private _route:Router){}
Cuentas = '';

  url = 'http://localhost:5000/auth';

  constructor(private http: HttpClient) {
    // this.http.get(this.url).toPromise().then(data => {
    //   // console.log(data);
    //   this.Cuentas = JSON.stringify(data);

    // })
  }

  ngOnInit(): void {
  this.login = new FormGroup({
    'fname': new FormControl('', Validators.required),
    'pasword': new FormControl('', [Validators.required, Validators.email])
  })

}
  logindata(login: FormGroup){
    console.log(this.login.value)
    const user = this.login.value.fname;
    const pasword = this.login.value.pasword;
    console.log(user);
    console.log(pasword);

    this.http.get(this.url).toPromise().then(data => {
      // console.log(data);
      this.Cuentas = JSON.stringify(data);
      
     const users = this.Cuentas
    //  console.log(users); 
     if(users.includes(user)&& users.includes(pasword)){
      console.log(user,"registrado");
      console.log(pasword,"registrado");
     }else{
          console.log('No te encuentras registrado habla con tu administrador')
     }
    })
 
    //   if(user){
    //     alert('Tu estas registrado')
    //     this.login.reset();
    //     this._route.navigate(['dashboard'])
    //   }else{
    //     alert('No te encuentras registrado habla con tu administrador')
    //     this._route.navigate(['login'])
    //   }
    //  }, err => {
    //   alert('Algo anda mal')
    //  }
    //  )
    }
}
