import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor} from "@angular/common/http";
import {AuthentificationService} from "./authentification.service";
import {Observable, of, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InterceptorsService {

  constructor(public sc:AuthentificationService) { }
  /* public handleAuthError(err: HttpErrorResponse): Observable<any> {
     //handle your auth error or rethrow
  /* if (err.status === 403) {
       //navigate /delete cookies or whatever


       this.sc.RefreshToken();


       // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
       return of(err.message); // or EMPTY may be appropriate here
     }

     return throwError(err);
   }*/
  // @ts-ignore
  intercept(req: HttpInterceptor<any>,next: HttpHandler): Observable<HttpEvent<any>>{
    console.log("Request Http Interceptor.....");
    if(!this.sc.AccessToken != null) return next.handle(req)
    let request=req.clone({
      setHeaders:{
        Authorization:'Bearer '+this.sc.getHeader()
      }
    })

    // @ts-ignore
    return next.handle(request);
  }
}
