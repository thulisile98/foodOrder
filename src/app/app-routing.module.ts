import { FoodpageComponent } from './foodpage/foodpage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { LoginComponent } from './login/login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderComponent } from './order/order.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search/:searchItem',
    component: HomeComponent,
  },
  {
    path: 'tag/:tag',
    component: HomeComponent,
  },
  {
    path: 'food/:Id',
    component: FoodpageComponent,
  },
  {
    path: 'cart-page',
    component: CartPageComponent,
  },
  {
    path: 'order',
    component: OrderComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },

  {
    path: 'checkout',
    component: CheckoutComponent,

  },
  { path: 'search-results/:products', component: SearchResultsComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
