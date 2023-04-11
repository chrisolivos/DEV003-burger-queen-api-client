import { Component, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../../shared/api.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})



export class AdminComponent {
  //Declaracion de Variables
 

  url = 'http://localhost:5000/users';

  constructor(private route: Router, private http: HttpClient, private api: ApiService, private auth: AuthService) {


  }


  ngOnInit(): void {

  }


  logout() {
    this.auth.signOut();
  }



}

