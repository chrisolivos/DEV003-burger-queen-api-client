import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AllowedRolGuard implements CanActivate {
  userRol: any;
  constructor(private auth: AuthService, private route: Router, private toastr: ToastrService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let allowedRoles = route.data?.['allowedRoles'];
    if (this.auth.isloggedin()) {
      if (allowedRoles.includes(sessionStorage.getItem('rol'))) {
        // this.route.navigate(["/login"]) 
        return true;
      }
    }
    this.toastr.error("No tiene permisos, comuniquece con el Administrador", 'Autorizacion fallida');
    this.route.navigate(["/login"])
    this.auth.signOut()
    return false;
  }
}
