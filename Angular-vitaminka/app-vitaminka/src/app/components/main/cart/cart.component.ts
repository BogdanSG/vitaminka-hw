import { Component, OnInit } from '@angular/core';
import {CartService} from '../../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Array<any>;

  constructor(private CartService: CartService){

    this.cart = this.CartService.getCart();

  }//constructor

  ngOnInit() {

  }//ngOnInit

  getAllPrice() {

    let allPrice = 0;

    this.cart.forEach(item => {

      allPrice += item.price * item.amount;

    });

    return allPrice;

  }//getAllPrice

  getAllCount(){

    let allCount = 0;

    this.cart.forEach(item => {

      allCount += +item.amount;

    });

    return allCount;

  }//getAllCount

  amountChange(product) {

    let number = +product.amount;

    if(number && number > 0){

      product.oldAmount = product.amount;

    }//if
    else {

      product.amount = product.oldAmount;

    }//else

    this.CartService.saveToCookies();

  }//amountChange

  deleteProductInCart(index) {

    this.CartService.deleteProductByIndex(index);

  }//deleteProductInCart

}//CartComponent
