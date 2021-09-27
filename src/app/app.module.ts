import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './componants/cart/cart.component';
import { HomeComponent } from './componants/home/home.component';
import { FooterComponent } from './componants/footer/footer.component';
import { HeaderComponent } from './componants/header/header.component';
import { ProductComponent } from './componants/product/product.component';
import { ThankyouComponent } from './componants/thankyou/thankyou.component';
import { CheckoutComponent } from './componants/checkout/checkout.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ListproductComponent} from "./componants/listproduct/listproduct.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { LoginNComponent } from './login-n/login-n.component';
import {AuthentificationService} from "./SecurityServices/authentification.service";
import {InterceptorsService} from "./SecurityServices/interceptors.service";
import {AdminDashboardComponent} from "./componants/admin-dashboard/admin-dashboard.component";
import {InterceptorsErrorHandlerService} from "./SecurityServices/interceptors-error-handler.service";
import { RecomTestComponent } from './recom-test/recom-test.component';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ProductComponent,
    ThankyouComponent,
    CheckoutComponent,
    ListproductComponent,
    LoginNComponent,
    AdminDashboardComponent,
    RecomTestComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthentificationService,
    {provide:HTTP_INTERCEPTORS,useClass:InterceptorsService,multi:true},
/* {provide:HTTP_INTERCEPTORS,useClass:InterceptorsErrorHandlerService,multi:true},*/
],
bootstrap: [AppComponent]
})
export class AppModule { }
