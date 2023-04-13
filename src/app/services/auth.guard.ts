import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import { AuthService } from './auth.service';
//import {JwtHelperService} from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';

//const helper= new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  AuthService: any;
  constructor(private auth: AuthService, private route: Router ,private toastr: ToastrService) {}

  
  canActivate(): boolean{
   if(this.auth.isloggedin()) {
    return true;
   }else{
    this.toastr.error("Error",'No tienes acceso');
    this.route.navigate(['/login'])
    return false;
   }


   
  }
  


}
