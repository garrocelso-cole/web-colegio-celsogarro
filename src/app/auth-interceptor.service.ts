import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token : string=environment.key_acceso_backend
    let request = req

    if(token){
      request = req.clone({
        setHeaders: {
          Authorization: `Api-Key ${ token }`
        }
      });
    }
    return next.handle(request)
  }

}
