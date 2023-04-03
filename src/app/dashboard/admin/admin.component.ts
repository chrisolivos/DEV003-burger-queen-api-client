import { Component, } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmployedModel } from './admin-employee.model';
import { ApiService } from '../../shared/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})



export class AdminComponent {
  //Declaracion de Variables
  usuarios:string = '';
  employeeModelObj: EmployedModel = new EmployedModel();
  employeeData !:any;
  userList: any;
  dataSource:any

  url = 'http://localhost:5000/users';

  constructor(private route: Router,private http: HttpClient, private api: ApiService, private auth: AuthService) {


  }
  ngOnInit(): void {
   this.getAllEmpoyee();
  }

  //Formulario de resistro
   signup = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('',  [Validators.required, Validators.minLength(6), 
      Validators.maxLength(15) ]),
    'rol': new FormControl(),
    'adminaccess': new FormControl(false)
    
  });



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
         this.signup.reset()
        this.getAllEmpoyee()
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

deleteEmployee(row: any){
  this.api.deleteEmploye(row.id)
  .subscribe(res=>{
    alert( 'Empleado borrado')
    this.getAllEmpoyee()
  })
}

onEdit(row: any){
  this.signup.controls['email'].setValue(row.email);
  this.signup.controls['password'].setValue(row.password);
  this.signup.controls['rol'].setValue(row.rol)
  this.signup.controls['adminaccess'].setValue(row.adminacces)
}

updateEmployeeDetails(){
  if(this.signup.value.email!==undefined||this.signup.value.email !==null){
    this.employeeModelObj.email = this.signup.value.email!;
  }
  if(this.signup.value!==undefined||this.signup.value !==null){
 
    this.employeeModelObj.password = this.signup.value.password!;
    this.employeeModelObj.rol = this.signup.value.rol;
    this.employeeModelObj.adminaccess = this.signup.value.adminaccess!;
    this.api.updateEmployee(this.employeeModelObj, this.employeeModelObj.id)
    .subscribe(res=>{
      let ref = document.getElementById('cancel');
      ref?.click()
      this.signup.reset()
      this.getAllEmpoyee()
    })
  }
 




}
logout(){
  this.auth.signOut();
}
 
}

