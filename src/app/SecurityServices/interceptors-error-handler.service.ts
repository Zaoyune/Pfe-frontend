import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthentificationService} from "./authentification.service";
import {Router} from "@angular/router";
import {Observable, of, throwError} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class InterceptorsErrorHandlerService implements HttpInterceptor{

  constructor(public sc:AuthentificationService,public router:Router) { }
  //un intercepteur qui intervient à chaque fois qu'il y'a une requette qui va etre émise
  // @ts-ignore
  intercept(req: HttpInterceptor<any>,next: HttpHandler): Observable<HttpEvent<any>>{
    console.log("Request Http Interceptor.....");
    if(!this.sc.AccessToken) return next.handle(req)
    let request=req.clone({
      setHeaders:{
        Authorization:'Bearer '+this.sc.getHeader()
      }
    })
    // @ts-ignore
    return next.handle(request);
  }
  public handleAuthError(err: HttpErrorResponse): Observable<any> {
    //handle your auth error or rethrow


    return throwError(err);
  }

  intercepts(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the new header.
    const authReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + this.sc.getHeader()
      }
    })
    // catch the error, make specific functions for catching specific errors and you can chain through them with more catch operators
    return next.handle(authReq).pipe(catchError(x=> this.handleAuthError(x))); //here use an arrow function, otherwise you may get "Cannot read property 'navigate' of undefined" on angular 4.4.2/net core 2/webpack 2.70
  }

}
