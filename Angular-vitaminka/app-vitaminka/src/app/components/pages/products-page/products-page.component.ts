import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  category: any;

  constructor(private ActivatedRoute : ActivatedRoute) {

    this.ActivatedRoute.params.subscribe(params => {

      this.onSortParamChange(params);

    });

  }//constructor

  onSortParamChange(params){

    let sortParam = params['sortParam'];

    if(sortParam){

      switch (sortParam) {

        case 'all': this.category = 'ALL_PRODUCTS'; break;

        case 'male': this.category = 'MALE_PRODUCTS'; break;

        case 'female': this.category = 'FEMALE_PRODUCTS'; break;

        case 'children': this.category = 'CHILDREN_PRODUCTS'; break;

        case 'sport': this.category = 'SPORT_PRODUCTS'; break;

        default: break;

      }//switch

    }//if

  }//onParamChange

  ngOnInit() {

  }//ngOnInit

}//ProductsPageComponent
