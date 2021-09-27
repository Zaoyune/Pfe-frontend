import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../SecurityServices/authentification.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-login-n',
  templateUrl: './login-n.component.html',
  styleUrls: ['./login-n.component.css']
})
export class LoginNComponent implements OnInit {

  mode:number=0;
  public logg:any;
  constructor(private  authService:AuthentificationService,private router:Router,private formBuilder: FormBuilder) { }

  // @ts-ignore
  public loginForm: FormGroup;
  invalidLogin: boolean = false;
  ngOnInit() {
    window.sessionStorage.removeItem('token');
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
  }


  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const body = new HttpParams()
      .set('username', this.loginForm.controls.username.value)
      .set('password', this.loginForm.controls.password.value)
      .set('grant_type', 'password');

    this.authService.logiN(body.toString()).subscribe(data => {
      window.sessionStorage.setItem('token', JSON.stringify(data));
      let token = window.sessionStorage.getItem('token');
      console.log(token);
      this.router.navigateByUrl("/home")

      //this.router.navigate(['list-user']);
    }, error => {
      alert(error.error.error_description)
    });
  }
  /*  onLogin(user) {
      this.authService.Loginuser(user)
        .subscribe(data=>{
          this.logg=data;
          console.log(this.logg);
          /*let jwt=data.headers.get('Authorization');
          console.log(data.headers.get('Authorization'));
          this.authService.saveToken(jwt);
          this.router.navigateByUrl('/tasks');
        },err=>{
          this.mode=1;
        })
    }*/
}
