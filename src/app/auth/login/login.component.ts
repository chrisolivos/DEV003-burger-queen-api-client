import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
//import { Router } from 'express';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  login: FormGroup | any;
  loginObj: any = {
    fname: '',
    password: ''
  };
  // constructor(private _http:HttpClient, private _route:Router){}
  Cuentas = '';


  url = 'http://localhost:3000/login';
  constructor(private http: HttpClient, private accService: AuthService, 
    private route: Router, private toastr: ToastrService) {
    // this.http.get(this.url).toPromise().then(data => {
    //   // console.log(data);
    //   this.Cuentas = JSON.stringify(data);

    // })
  }

  ngOnInit(): void {
    this.login = new FormGroup({
      'email': new FormControl('', Validators.required),
      'password': new FormControl('', [Validators.required, Validators.email])
    })


  }

  logindata(login: FormGroup) {
    //console.log(this.login.value)
    //const user = this.login.value.fname;
    //const pasword = this.login.value.pasword;
    //console.log(user);
    //console.log(pasword);



    //WR: logica para el post

    /*
    {
      "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3OTg3NDk2NywiZXhwIjoxNjc5ODc4NTY3LCJzdWIiOiIxIn0.UE5YXG50NKbnVW6xOsU3LgmfJlbvCFkssFMO9C9GLpQ",
      "user": {
        "email": "admin@gmail.com",
        "id": 1
      }
    }
    
    */

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
      }
      )
    };

    this.http.post(this.url, this.login.value, httpOptions).
      subscribe(res => {
        //console.log("Respuesta:  ", res.status);
        loginMask = res;
        //console.log("Respuesta:  ", loginMask.accessToken);

        sessionStorage.setItem('token', loginMask.accessToken);
        this.toastr.success(`Bienvenido ${loginMask.user.email}`,'Acceso Correcto');
        this.route.navigate(['']);
      }, Error => {
        //console.log("Error from json server auth: ", Error.error);
        this.toastr.error(Error.error,'Error');
      }
      )
      ;

    /*
      this.http.get(this.url).toPromise().then(data => {
        
        this.Cuentas = JSON.stringify(data);
        
       const users = this.Cuentas;
        //console.log("Usuarios: ", this.Cuentas.token); 
       if(users.includes(user) && users.includes(pasword)){
        console.log(user,"registrado");
        console.log(pasword,"registrado");
    // const token = new Token(1,100,3,0,'fsdffwewefwef');
    // console.log('tokening: ', token.strValue);
        //const tokenParams = new tokenParams{
    
       }else{
            console.log('No te encuentras registrado habla con tu administrador')
       }
    
     
    
      // this.accService.onLogin(this.login.value).subscribe((res:any)=>{
        //console.log(res);
    //  localStorage.setItem('token', res.token)
    //  })
      })*/
  }
}
// export class LoginComponent {
//   constructor(private builder: FormBuilder, private toastr: ToastrService, private service: AuthService,
//     private router: Router) {
//       sessionStorage.clear();

//   }
//   result: any;

//   loginform = this.builder.group({
//     id: this.builder.control('', Validators.required),
//     password: this.builder.control('', Validators.required)
//   });

//   proceedlogin() {
//     if (this.loginform.valid) {
//       this.service.GetUserbyCode(this.loginform.value.id).subscribe(item => {
//         this.result = item;
//         if (this.result.password === this.loginform.value.password) {
//           if (this.result.isactive) {
//             sessionStorage.setItem('username',this.result.id);
//           //  sessionStorage.setItem('role',this.result.role);
//             this.router.navigate(['']);
//           } else {
//             this.toastr.error('Please contact Admin', 'InActive User');
//           }
//         } else {
//           this.toastr.error('Invalid credentials');
//         }
//       });
//     } else {
//       this.toastr.warning('Please enter valid data.')
//     }
//   }
// }