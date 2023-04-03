import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthService } from './auth.service';

import { ToastrService } from 'ngx-toastr';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private route: Router ,private toastr: ToastrService) {}

  
  canActivate(): boolean{
   if(this.auth.isloggedin()){

    return true;
   }else{
    this.toastr.error("Error",'No tienes acceso');
    this.route.navigate(['/login'])
    return false;
   }

  }
}
