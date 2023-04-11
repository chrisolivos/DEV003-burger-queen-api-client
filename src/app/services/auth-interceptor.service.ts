import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService  implements HttpInterceptor {

  constructor(
    private route: Router
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
    let token = localStorage.getItem('token');

    let request = req;

    if (token) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${ token }`
        }
      });
    }

    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {

        if (err.status === 401) {
          this.route.navigateByUrl('/login');
    //    this.route.navigate(['login'])
        }

        return throwError( err );

      })
    );
  }

}