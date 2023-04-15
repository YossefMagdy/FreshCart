import { RegisterComponent } from './components/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsComponent } from './components/brands/brands.component';
import { CartsComponent } from './components/carts/carts.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SingupComponent } from './components/singup/singup.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';
import { AuthGuard } from './auth.guard';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { ProductsComponent } from './components/products/products.component';
import { GetspecCategComponent } from './components/getspec-categ/getspec-categ.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent},
  {path:'categories',canActivate:[AuthGuard],component:CategoriesComponent},
  {path:'cart',canActivate:[AuthGuard],component:CartsComponent},
  {path:'productDetail/:id',canActivate:[AuthGuard],component:ProductsDetailComponent},
  {path:'GetSpecCategory/:id',canActivate:[AuthGuard],component:GetspecCategComponent},
  {path:'brands',canActivate:[AuthGuard],component:BrandsComponent},
  {path:'allorders',canActivate:[AuthGuard],component:AllordersComponent},
  {path:'products',canActivate:[AuthGuard],component:ProductsComponent},
  {path:'CheckOut/:id',canActivate:[AuthGuard],component:CheckoutComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:SingupComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true}) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
