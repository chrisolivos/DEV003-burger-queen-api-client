import { Component, OnInit, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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



export class AdminComponent implements OnInit{
  //Declaracion de Variables
 

  url = 'http://localhost:5000/users';

  constructor(private route: Router, private http: HttpClient, private api: ApiService, private auth: AuthService) {


  }


  ngOnInit(): void {

    
      // const headers = new HttpHeaders({
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer ${sessionStorage.getItem('accesToken')}`
      //   });
  
      // const requestOptions = { headers: headers };
  
      // this.http.get('http://localhost:5000/products', requestOptions)
      //     .subscribe((res: any) => {
      //         console.log(res);
      //     });
  }

  
  logout() {
    this.auth.signOut();
  }



}

