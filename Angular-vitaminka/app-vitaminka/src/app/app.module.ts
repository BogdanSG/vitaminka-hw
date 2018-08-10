import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule }   from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader } from '@ngx-translate/http-loader';

import { CookieService } from 'ngx-cookie-service';

import { BlogService } from './services/blog.service';
import { CartService } from './services/cart.service';
import { CatalogService } from './services/catalog.service';
import { LocaleService } from './services/locale.service';
import { NewsService } from './services/news.service';
import { BlogComponent } from './components/blog/blog.component';
import { CartComponent } from './components/cart/cart.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ArticleComponent } from './components/article/article.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsComponent } from './components/news/news.component';
import { ProductComponent } from './components/product/product.component';
import { CatalogOffsetFilterPipe } from './pipes/catalog-offset-filter.pipe';
import { CatalogSortFilterPipe } from './pipes/catalog-sort-filter.pipe';
import { AboutUsPageComponent } from './components/pages/about-us-page/about-us-page.component';
import { BlogPageComponent } from './components/pages/blog-page/blog-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { SmallMenuComponent } from './components/small-menu/small-menu.component';
import { SvgSpriteComponent } from './components/svg-sprite/svg-sprite.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { ContactsPageComponent } from './components/pages/contacts-page/contacts-page.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ProductsPageComponent } from './components/pages/products-page/products-page.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogOffsetFilterPipe,
    CatalogSortFilterPipe,
    BlogComponent,
    CartComponent,
    CatalogComponent,
    ArticleComponent,
    HeaderComponent,
    NewsComponent,
    ProductComponent,
    AboutUsPageComponent,
    BlogPageComponent,
    FooterComponent,
    SmallMenuComponent,
    SvgSpriteComponent,
    CartPageComponent,
    CheckoutPageComponent,
    ContactsPageComponent,
    HomePageComponent,
    ProductsPageComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [CookieService, BlogService, CartService, CatalogService, LocaleService, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {

  return new TranslateHttpLoader(http);

}//HttpLoaderFactory
