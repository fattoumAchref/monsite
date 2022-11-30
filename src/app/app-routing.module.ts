import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './lesComposantes/home/home.component';
import { LoginComponent } from './lesComposantes/login/login.component';
import { SellCarComponent } from './lesComposantes/sell-car/sell-car.component';
import { ShopNewComponent } from './lesComposantes/shop-new/shop-new.component';
import { ShopUsedComponent } from './lesComposantes/shop-used/shop-used.component';

const routes: Routes = [
  {path:"Home",component:HomeComponent},
  {path:"ShopNew",  component: ShopNewComponent},
  {path:"ShopUsed", component: ShopUsedComponent},
  {path:"SellCar", component: SellCarComponent},
  {path:"Login",component:LoginComponent},
  {path:'', redirectTo:"Home", pathMatch:'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
