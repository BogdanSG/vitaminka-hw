import { Component, OnInit } from '@angular/core';
import {CartService} from '../../../services/cart.service';
import {PromoCodeService} from '../../../services/promo-code.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  cart: Array<any>;
  discount: number;
  codeText: string;
  delivery: number;
  codes: Array<any>;

  constructor(private CartService : CartService, private PromoCodeService : PromoCodeService){

    this.cart = CartService.getCart();

    this.discount = 0;

    this.codeText = '';

    this.delivery = 20;

  }//constructor

  getAllDiscountPrice(){

    let price = this.CartService.getAllPrice();

    return price - (price * this.discount);

  }//getAllDiscountPrice

  getAllCount(){

    return this.CartService.getAllCount();

  }//getAllCount

  getDiscountPrice(product){

    return product.price - (product.price * this.discount);

  }//getDiscountPrice

  applyCode(codeText){

    if(this.codes){

      for(let i = 0; i < this.codes.length; i++){

        if(this.codes[i].code === codeText) {

          this.discount = this.codes[i].discount;

          return;

        }//if

      }//for

      this.discount = 0;

    }//if

  };

  applyCheckOut(){

    this.CartService.clearCart();

  };

  ngOnInit() {

    //Это не правильно, но так как это чистый front-end, пока так

    this.PromoCodeService.getPromoCodes().then(codes => {

      if(Array.isArray(codes)){

        this.codes = codes;

      }//if

    });

  }//ngOnInit

}//CheckOutComponent
