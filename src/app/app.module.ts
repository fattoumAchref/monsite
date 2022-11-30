import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopNewComponent } from './lesComposantes/shop-new/shop-new.component';
import { ShopUsedComponent } from './lesComposantes/shop-used/shop-used.component';
import { SellCarComponent } from './lesComposantes/sell-car/sell-car.component';
import { LoginComponent } from './lesComposantes/login/login.component';
import { HomeComponent } from './lesComposantes/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopNewComponent,
    ShopUsedComponent,
    SellCarComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
