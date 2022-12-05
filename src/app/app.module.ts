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
import { MoreinfoComponent } from './lesComposantes/moreinfo/moreinfo.component';
import { TransformPipe } from './transform.pipe';
import { CarsUComponent } from './lesComposantes/cars-u/cars-u.component';
import { MoreinfoUComponent } from './lesComposantes/moreinfo-u/moreinfo-u.component';
import { ErrorComponent } from './lesComposantes/error/error.component';
import { CommentsComponent } from './lesComposantes/comments/comments.component';
import { NavComponent } from './lesComposantes/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopNewComponent,
    ShopUsedComponent,
    SellCarComponent,
    LoginComponent,
    HomeComponent,
    CarsComponent,
    MoreinfoComponent,
    TransformPipe,
    CarsUComponent,
    MoreinfoUComponent,
    ErrorComponent,
    CommentsComponent,
    NavComponent,
    
    
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
