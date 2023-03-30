import { Component, } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmployedModel } from './admin-employee.model';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})



export class AdminComponent {
  usuarios = '';


  url = 'http://localhost:5000/users';
  constructor(private route: Router,private http: HttpClient, private api: ApiService) {

  //  this.http.get(this.url).toPromise().then(data => {
  //   console.log('data:',data);
  //     this.usuarios = JSON.stringify(data);
  //     console.log('usuarios:',this.usuarios);
  // })
  }
  ngOnInit(): void {
   this.getAllEmpoyee();
  }
   signup = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('',  [Validators.required, Validators.minLength(6), 
      Validators.maxLength(15) ]),
    'rol': new FormControl(),
    'adminaccess': new FormControl(false)
    
  });

  userList: any;
  dataSource:any
  EmployedModelObj: EmployedModel = new EmployedModel();
  employeeData !:any;
  LoadUser(){
    this.http.get(this.url).subscribe(res => {
    this.userList = res;
    })
  }
 signupdata(signup:FormGroup){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }
      )
    };

    this.http.post(this.url, this.signup.value, httpOptions).
      subscribe(res => {
        console.log("Respuesta:  ", res);
  
         this.route.navigate(['/admin']);
   
      }
      )
      ;

  }
  getAllEmpoyee(){
    this.api.getEmploye()
    .subscribe(res=>{
    this.employeeData=res;
    })
  }
}