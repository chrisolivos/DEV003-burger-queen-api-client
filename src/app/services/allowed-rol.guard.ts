import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import {  ToastrService } from 'ngx-toastr';



@Injectable({
  providedIn: 'root'
})
export class AllowedRolGuard implements CanActivate {
  userRol: any;

  constructor(private auth: AuthService, private route: Router, private toastr: ToastrService) { }

  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // let permisosRequeridos= route.data    
     let allowedRoles = route.data?.['allowedRoles'];
     let userRol='';
    // let allowedRoles = route.data;
      if(this.auth.isloggedin()){
      //  this.userRol = sessionStorage.getItem('rol');
        //sessionStorage.getItem('rol');
     // console.log('arreglo permisos' ,allowedRoles);
     // console.log('rol de ususario',userRol);
     // console.log(allowedRoles.includes('mesero'));

      if(allowedRoles.includes(sessionStorage.getItem('rol'))){
        // this.route.navigate(["/login"]) 
         return true;
       }
      }

      this.toastr.error("No tiene permisos, comuniquece con el Administrador",'Autorizacion fallida');
      this.route.navigate(["/login"]) 
      this.auth.signOut()

       return false;
     // let tienePermiso = this.auth.isloggedin
      //if (this.auth.isloggedin()){
        
     // }
                        // this.auth.getRole()
                        // .some(p=> allowedRoles.includes(p) )
      //Aqui puede ir un mensaje de que no tiene permiso
     // return true;
  }
  
}
