import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../../shared/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { EmployedModel } from '../admin/admin-employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  //Declaracion de Variables
  btnactualizar: Boolean = false;
  btnregistrar: Boolean = true;
  usuarios: string = '';
  employeeModelObj: EmployedModel = new EmployedModel();
  employeeData !: any;
  idEmployee !: any;
  emailEmployee !: any;
  userList: any;
  dataSource: any
  checked: boolean = false;

  url = 'http://localhost:5000/users';
  constructor(private route: Router, private http: HttpClient, private api: ApiService, private auth: AuthService) {}

  ngOnInit(): void {
    this.getAllEmpoyee();
  }
  //Formulario de resistro
  signup = new FormGroup({
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', [Validators.required, Validators.minLength(6),
    Validators.maxLength(15)]),
    'rol': new FormControl(),
    'adminaccess': new FormControl(false)
  });
  //Funcion del boton submit para registrar
  signupdata(signup: FormGroup) {
    this.btnregistrar = true;
    this.btnactualizar = false;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }
      )
    };
    this.http.post(this.url, this.signup.value, httpOptions).
      subscribe(res => {
        // console.log("Respuesta:  ", res);
        this.route.navigate(['/admin']);
        this.signup.reset()
        this.getAllEmpoyee()
      });
  }
  //Mostrar los trabajadores
  getAllEmpoyee() {
    this.api.getEmploye()
      .subscribe(res => {
        this.employeeData = res;
      })
  }
  //guardar el id de un trabajador para borrar
  onDelete(rowId: any) {
    this.idEmployee = rowId.id
   // console.log(this.idEmployee)
  }
  //Eliminar  un trabajador por id
  deleteEmployee() {
    this.api.deleteEmploye(this.idEmployee)
      .subscribe(res => {
        //   alert( 'Empleado borrado')
        this.getAllEmpoyee()
      })
  }
  //guardar el id de un trabajador para editar
  onEdit(row: any) {
    this.signup.controls['email'].setValue(row.email);
    this.signup.controls['password'].setValue(row.password);
    this.signup.controls['rol'].setValue(row.rol)
    this.signup.controls['adminaccess'].setValue(row.adminaccess);
    this.idEmployee = row.id
    this.btnactualizar = true;
    this.btnregistrar = false;
    this.checked = row.adminaccess;
    console.log(this.checked);
    console.log(row.password);
    console.log(row.adminaccess);
  }
  updateEmployeeDetails() {
    if (this.signup.value !== undefined || this.signup.value !== null) {
      this.employeeModelObj.email = this.signup.value.email!;
      this.employeeModelObj.password = this.signup.value.password!;
      this.employeeModelObj.rol = this.signup.value.rol;
      this.employeeModelObj.adminaccess = this.signup.value.adminaccess!;
      // console.log();
      this.api.updateEmployee(this.employeeModelObj, this.idEmployee)
        .subscribe(res => {
          //  console.log(this.employeeUnicData=res); 
          let ref = document.getElementById('cancel');
          ref?.click()
          this.signup.reset()
          this.getAllEmpoyee()
        })
    }
  }
  btnCancel() {
    this.btnactualizar = false;
    this.btnregistrar = true;
    this.signup.reset()
  }
}
