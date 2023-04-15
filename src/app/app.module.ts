import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegisterComponent } from './components/register/register.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CartsComponent } from './components/carts/carts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingupComponent } from './components/singup/singup.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component'
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { CategSliderComponent } from './components/categ-slider/categ-slider.component';
import { SearchPipe } from './search.pipe';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AllordersComponent } from './components/allorders/allorders.component' 
import { HeaderInterceptor } from './header.interceptor';
import { ProductsComponent } from './components/products/products.component';
import { GetspecCategComponent } from './components/getspec-categ/getspec-categ.component';

// Import library module
import { NgxSpinnerModule } from "ngx-spinner";
import { SpinnerInterceptor } from './spinner.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    NotfoundComponent,
    RegisterComponent,
    CategoriesComponent,
    BrandsComponent,
    CartsComponent,
    SingupComponent,
    ProductsDetailComponent,
    MainSliderComponent,
    CategSliderComponent,
    SearchPipe,
    CheckoutComponent,
    AllordersComponent,
    ProductsComponent,
    GetspecCategComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule ,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    NgxSpinnerModule
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:SpinnerInterceptor,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HeaderInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
