import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './components/pages/home-page/home-page.component';
import {AboutUsPageComponent} from './components/pages/about-us-page/about-us-page.component';
import {BlogPageComponent} from './components/pages/blog-page/blog-page.component';
import {CartPageComponent} from './components/pages/cart-page/cart-page.component';
import {CheckoutPageComponent} from './components/pages/checkout-page/checkout-page.component';
import {ContactsPageComponent} from './components/pages/contacts-page/contacts-page.component';
import {ProductsPageComponent} from './components/pages/products-page/products-page.component';
import {ArticlePageComponent} from './components/pages/article-page/article-page.component';
import {ProductPageComponent} from './components/pages/product-page/product-page.component';
import {MainPageComponent} from './components/pages/main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      { path: 'home', component: HomePageComponent },
      { path: 'about_us', component: AboutUsPageComponent },
      { path: 'article/:singleBlogID', component: ArticlePageComponent },
      { path: 'blog', component: BlogPageComponent },
      { path: 'cart', component: CartPageComponent },
      { path: 'checkout', component: CheckoutPageComponent },
      { path: 'contacts', component: ContactsPageComponent },
      { path: 'contacts', component: ContactsPageComponent },
      { path: 'product/:productID', component: ProductPageComponent },
      { path: 'products/:sortParam', component: ProductsPageComponent },
      { path: '**', redirectTo: '/home' }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
