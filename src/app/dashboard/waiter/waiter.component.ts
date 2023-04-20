import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../../shared/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})
export class WaiterComponent {
//  url = 'http://localhost:5000/users';

constructor(private route: Router, private http: HttpClient, private api: ApiService, 
  private auth: AuthService) {


}
  logout() {
    this.auth.signOut();
    sessionStorage.removeItem('token'); 
    sessionStorage.removeItem('rol'); 
  }

}
