import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { CatalogService } from '../../../services/catalog.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: any;

  constructor(private CatalogService : CatalogService, private CartService : CartService, private ActivatedRoute : ActivatedRoute){

    console.log(this.ActivatedRoute);

    let productID = this.ActivatedRoute.snapshot.params['productID'];

    if(productID){

      this.CatalogService.getProductByID(productID).then(product => {

        this.product = product;

        let cart = CartService.getCart();

        if(cart.some( p => p.id === this.product.id)){

          this.product.inCart = true;

        }//if
        else {

          this.product.inCart = false;

        }//else

        this.product.oldAmount = this.product.amount = 1;

      });

    }//if

  }//constructor

  ngOnInit() {

  }//ngOnInit

  addProductToCart(product)  {

    if(this.product.amount === '')
      return;

    let copy = Object.assign({}, product);

    this.CartService.addProduct(copy);

    product.inCart = true;

  }//addProductToCart

  amountChange() {

    let number = +this.product.amount;

    if(number && number > 0){

      this.product.oldAmount = this.product.amount;

    }//if
    else {

      this.product.amount = this.product.oldAmount;

    }//else

  }//amountChange

}//ProductComponent
