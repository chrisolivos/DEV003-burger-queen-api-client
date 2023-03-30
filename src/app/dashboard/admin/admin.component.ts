import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})



export class AdminComponent {
  usuarios = '';
  // datausers: any = {
  //   id: '',
  //  email: '',
  //  password:'',
  //  rol:'',
  //  adminaccess:''
    
  // };

  url = 'http://localhost:5000/users';
  constructor(private route: Router,private http: HttpClient) {

   this.http.get(this.url).toPromise().then(data => {
    console.log('data:',data);
      this.usuarios = JSON.stringify(data);
      console.log('usuarios:',this.usuarios);
  })
  }
}