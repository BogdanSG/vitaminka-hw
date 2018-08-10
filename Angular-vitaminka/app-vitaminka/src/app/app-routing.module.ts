import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './components/pages/home-page/home-page.component';
import {AboutUsPageComponent} from './components/pages/about-us-page/about-us-page.component';
import {ArticleComponent} from './components/article/article.component';
import {BlogPageComponent} from './components/pages/blog-page/blog-page.component';
import {CartPageComponent} from './components/pages/cart-page/cart-page.component';
import {CheckoutPageComponent} from './components/pages/checkout-page/checkout-page.component';
import {ContactsPageComponent} from './components/pages/contacts-page/contacts-page.component';
import {ProductComponent} from './components/product/product.component';
import {ProductsPageComponent} from './components/pages/products-page/products-page.component';

const routes: Routes = [

  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'about_us', component: AboutUsPageComponent },
  { path: 'article/:singleBlogID', component: ArticleComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'cart', component: CartPageComponent },
  { path: 'checkout', component: CheckoutPageComponent },
  { path: 'contacts', component: ContactsPageComponent },
  { path: 'contacts', component: ContactsPageComponent },
  { path: 'product/:productID', component: ProductComponent },
  { path: 'products/:sortParam', component: ProductsPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
