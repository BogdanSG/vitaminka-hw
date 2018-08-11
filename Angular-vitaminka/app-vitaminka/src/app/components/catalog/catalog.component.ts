import {Component, Input, OnInit} from '@angular/core';
import {CatalogService} from '../../services/catalog.service';
import {CartService} from '../../services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { IOffset } from '../../interface/ioffset';

declare var $;
declare var SelectFx;

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit, IOffset {

  catalog: any;
  sortParam: string;

  @Input()
  offset: number;

  @Input()
  set ready(isReady: boolean) {

    console.log(isReady);

    if (isReady){

      this.ngForFinish();

    }//if

  }//ready

  constructor(private ActivatedRoute : ActivatedRoute, private CatalogService : CatalogService, private CartService: CartService){

    this.catalog = [];

    this.ActivatedRoute.params.subscribe(params => {

      this.onSortParamChange(params);

    });

    this.offset = 8;

    this.CatalogService.getCatalog().then(catalog => {

      this.catalog = catalog;

      let cart = this.CartService.getCart();

      this.catalog.forEach(item => {

        if(cart.some( p => p.id === item.id)){

          item.inCart = true;

        }//if
        else {

          item.inCart = false;

        }//else

      });

    });

  }//constructor

  onSortParamChange(params){

    let sortParam = params['sortParam'];

    if(sortParam){

      this.sortParam = sortParam;

    }//if
    else {

      this.sortParam = 'all';

    }//else

  }//onSortParamChange

  addOffset() {

    if(this.catalog.length > this.offset)
      this.offset += 4;

  }//addOffset

  ngForFinish() {

    this.__JqueryCode();

  }//ngRepeatFinish

  addProductToCart(product) {

    let copy = Object.assign({}, product);

    copy.amount = document.querySelector(`div[data-id="${product.id}"] > div > span`).innerHTML.trim();

    this.CartService.addProduct(copy);

    product.inCart = true;

  }//addProductToCart

  __JqueryCode(){

    $('.dropdown-toggle').dropdown();
    (function() {
      [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {

        if(el.id !== 'select-lang' && !el.classList.contains('select-true')){

          new SelectFx(el);

          el.classList.add('select-true');

        }//if

      } );
    })();

  }//__JqueryCode

  ngOnInit() {

  }//ngOnInit

}//CatalogComponent
