import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PackagesComponent } from './packages/packages.component';
import { TrainersComponent } from './trainers/trainers.component';
import { WorkoutplanComponent } from './workoutplan/workoutplan.component';
import { RegisterComponent } from './register/register.component';
import { SignComponent } from './sign/sign.component';
import { SuccessComponent } from './success/success.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CartService } from './cart.service';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PackagesComponent,
    TrainersComponent,
    WorkoutplanComponent,
    RegisterComponent,
    SignComponent,
    SuccessComponent,
    ProductComponent,
    CartComponent,
    AboutComponent
    
  
    
  
  
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
