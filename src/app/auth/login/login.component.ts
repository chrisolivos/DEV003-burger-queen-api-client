import { Component, OnInit } from '@angular/core';
import{FormControl, FormGroup,  Validators, FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent  implements OnInit  {
  login: FormGroup|any;
  loginObj: any ={
    userName:'',
    userPassword:''
  };
  // constructor(private _http:HttpClient, private _route:Router){}
Cuentas = '';

  url = 'http://localhost:5000/auth';
  constructor(private http: HttpClient, private accService: AuthService) {
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
   this.accService.onLogin(this.loginObj).subscribe((res:any)=>{
    console.log(res);
  localStorage.setItem('token', res.token)
  })
  })
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