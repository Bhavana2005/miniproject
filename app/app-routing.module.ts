import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PackagesComponent } from './packages/packages.component';
import { TrainersComponent } from './trainers/trainers.component';
import { WorkoutplanComponent } from './workoutplan/workoutplan.component';
import { RegisterComponent } from './register/register.component';
import { SignComponent } from './sign/sign.component';
import { SuccessComponent } from './success/success.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  {path :'about', component:AboutComponent},
  { path: '', component: SignComponent },
  {path: 'home', component: HomeComponent},
  { path: 'packages', component: PackagesComponent, pathMatch: 'full' },
  { path: 'trainers', component: TrainersComponent },
  { path: 'workoutplan', component: WorkoutplanComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  {path:'product', component: ProductComponent},
  {path: 'cart', component: CartComponent},
  {path: 'register',component: RegisterComponent},
  {path:'success',component: SuccessComponent},
  { path: '', redirectTo: '/register', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
