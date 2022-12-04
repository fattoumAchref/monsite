import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './lesComposantes/error/error.component';
import { HomeComponent } from './lesComposantes/home/home.component';
import { LoginComponent } from './lesComposantes/login/login.component';
import { MoreinfoUComponent } from './lesComposantes/moreinfo-u/moreinfo-u.component';
import { MoreinfoComponent } from './lesComposantes/moreinfo/moreinfo.component';
import { SellCarComponent } from './lesComposantes/sell-car/sell-car.component';
import { ShopNewComponent } from './lesComposantes/shop-new/shop-new.component';
import { ShopUsedComponent } from './lesComposantes/shop-used/shop-used.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'', redirectTo:"Home", pathMatch:'full'},
  {path:'ShopNew',  component: ShopNewComponent},
  {path:'ShopNew/:id/:nom/:prix/:cv/:porte/:toutoption',  component: MoreinfoComponent},
  {path:'ShopUsed', component: ShopUsedComponent},
  {path:'ShopUsed/:id/:nom/:prix/:cv/:porte/:km/:toutoption',  component: MoreinfoUComponent},
  {path:'SellCar', component: SellCarComponent},
  {path:'Login',component:LoginComponent},
  {path:'**',component:ErrorComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
