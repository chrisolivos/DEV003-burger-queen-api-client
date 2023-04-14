import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';



@Injectable({
  providedIn: 'root'
})
export class AllowedRolGuard implements CanActivate {
  userRol: any;

  constructor(private auth: AuthService, private route: Router) { }
  
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
      console.log('arreglo permisos' ,allowedRoles);
      console.log('rol de ususario',userRol);
      console.log(allowedRoles.includes('mesero'));
    // console.log(allowedRoles.find((e: string)=> e == userRol));
      if(allowedRoles.includes(sessionStorage.getItem('rol'))){
        // this.route.navigate(["/login"]) 
         return true;
       }
      }
      
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
