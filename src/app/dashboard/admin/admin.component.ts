import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
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

  constructor(private route: Router, private http: HttpClient, private api: ApiService, 
    private auth: AuthService) {}

  ngOnInit(): void { 
  
  }

  logout() {
    this.auth.signOut();
  
  }

}

