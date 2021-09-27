import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Environment} from "../services/environment";
import {Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  host=Environment.host;
  hostrec=Environment.hostRec;
  private jwtToken=null;
  // @ts-ignore
  private roles:Array<any>;
  public authenticated: boolean = false;
  public AccessToken: any
  public headers:any;
  public Admin:number=1;

  constructor(public http:HttpClient,public router:Router ) {

  }

  logiN(loginPayload:any) {
    const headers = {
      'Authorization': 'Basic ' + btoa('devglan-client:devglan-secret'),
      'Content-type': 'application/x-www-form-urlencoded'
    }
    console.log(headers)
    console.log(loginPayload)
    this.authenticated=true;
    return this.http.post(this.host + '/login', loginPayload, {headers});


  }
  public getHeader():HttpHeaders{
    this.authenticated=true;
    let token= window.sessionStorage.getItem('token');
    this.AccessToken = JSON.parse(<string>window.sessionStorage.getItem('token'));
    console.log(this.AccessToken["access-token"]);

      this.headers = new HttpHeaders({
        'Authorization': 'Bearer ' + this.AccessToken['access-token'],
        'Content-type': 'application/json'
      }), throwError(
        this.RefreshToken()
      )


    return this.headers;
  }

  public RefreshToken(){
    let token= window.sessionStorage.getItem('token');
    if (token != null) {
      this.AccessToken = JSON.parse(token);
    }
    console.log("Ancien access-token "+this.AccessToken["access-token"])
    console.log(this.AccessToken['refresh-token'])
    const headerss = {
      'Authorization': 'Bearer ' + this.AccessToken['refresh-token'],
      'Content-type': 'application/json'
    }
    console.log(headerss);
    return this.http.get(this.host + "/refreshToken",{headers: headerss}).subscribe(response=>{
      //console.log("Ancien access token   "+response["access-token"])
      //console.log(this.AccessToken["access-token"])
      // @ts-ignore
      if(response['access-token']){
        // @ts-ignore
        this.AccessToken["access-token"]=response["access-token"];
        console.log("Nouveau access token   "+this.AccessToken["access-token"])
      }

      window.sessionStorage.setItem('token', JSON.stringify(this.AccessToken));
    })
  }

  getUsers() {

    return this.http.get(this.host + 'user?access_token=' + JSON.parse(<string>window.sessionStorage.getItem('token')).access_token);
  }
  public getus():Observable<any>{
    return this.http.get(this.host + '/userss', {headers: this.getHeader()});

  }


  IsAdmin(){
    return this.http.get(this.host+"/profile",{headers: this.getHeader()}).subscribe(data=>{
      // @ts-ignore
      console.log(data["appRoles"]);

      // @ts-ignore
      for(let r of data["appRoles"]) {
        if (r.role == 'ADMIN') {
          console.log(r.role)
          this.Admin = 2;
        }else{
          this.Admin = 1;
        }
      }
    });
  }
  logout(){
    this.jwtToken=null;
    window.sessionStorage.removeItem('token');
    this.authenticated=false;
  }

  /******************TEST********************/
  public saveResource(article:any):Observable<any>{
    return this.http.post<any>(this.host + '/AjouterArticles', article,{headers: this.getHeader()});
  }
  public AddUser(data: any) : Observable<any>{
    console.log(data)
    return this.http.post<any>(this.host + '/AddUser',data,  {headers: this.getHeader()});
  }
  public recom(id:any){
    return this.http.get(this.hostrec + '/Rec?id='+id, {headers: this.getHeader()});
  }
}
