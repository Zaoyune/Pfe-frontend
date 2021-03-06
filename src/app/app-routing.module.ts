import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './componants/cart/cart.component';
import { HomeComponent } from './componants/home/home.component';
import { FooterComponent } from './componants/footer/footer.component';
import { HeaderComponent } from './componants/header/header.component';
import { ProductComponent } from './componants/product/product.component';
import { ThankyouComponent } from './componants/thankyou/thankyou.component';
import { CheckoutComponent } from './componants/checkout/checkout.component';
import {ListproductComponent} from "./componants/listproduct/listproduct.component";
import {LoginNComponent} from "./login-n/login-n.component";
import {AdminDashboardComponent} from "./componants/admin-dashboard/admin-dashboard.component";
import {RecomTestComponent} from "./recom-test/recom-test.component";
const routes: Routes = [
  {
    path:'home', component : HomeComponent
  },
  {
    path:'cart', component:CartComponent
  },
  {
    path:'product/:id',component:ProductComponent
  },
  {
    path:'checkout',component:CheckoutComponent
  },
  {
    path:'thankyou',component:ThankyouComponent
  },
  {
    path:'header',component:HeaderComponent
  },
  {
    path:'listproduct/:cat' , component:ListproductComponent
  },
  {path:"login",component:LoginNComponent},
  //{path:'',redirectTo:'login',pathMatch:'full'},
  {path:"admin",component:AdminDashboardComponent},
  {path:"recom",component:RecomTestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
