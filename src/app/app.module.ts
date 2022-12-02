import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopNewComponent } from './lesComposantes/shop-new/shop-new.component';
import { ShopUsedComponent } from './lesComposantes/shop-used/shop-used.component';
import { SellCarComponent } from './lesComposantes/sell-car/sell-car.component';
import { LoginComponent } from './lesComposantes/login/login.component';
import { HomeComponent } from './lesComposantes/home/home.component';
import { CarsComponent } from './lesComposantes/cars/cars.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ShopNewComponent,
    ShopUsedComponent,
    SellCarComponent,
    LoginComponent,
    HomeComponent,
    CarsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
