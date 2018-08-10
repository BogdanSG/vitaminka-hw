"use strict";

export default class CatalogController {

    constructor($scope, $stateParams, CatalogService, CartService){

        this.$scope = $scope;

        this.$scope.catalog = [];

        if($stateParams.sortParam){

            this.$scope.sortParam = $stateParams.sortParam;

        }//if
        else {

            this.$scope.sortParam = 'all';

        }//else

        this.$scope.offset = 8;

        this.$scope.addOffset = () => {

            if(this.$scope.catalog.length > this.$scope.offset)
                this.$scope.offset += 4;

        };

        this.$scope.ngRepeatFinish = () => {

            this.__JqueryCode();

        };

        CatalogService.getCatalog().then(catalog => {

            this.$scope.catalog = catalog;

            let cart = CartService.getCart();

            this.$scope.catalog.forEach(item => {

                if(cart.some( p => p.id === item.id)){

                    item.inCart = true;
                    item.style = {'display':'none'};

                }//if
                else {

                    item.inCart = false;

                }//else

            });

            this.$scope.$apply();

        });

        this.$scope.addProductToCart = product => {

            let copy = Object.assign({}, product);

            copy.amount = document.querySelector(`div[data-id="${product.id}"] > div > span`).innerText;

            CartService.addProduct(copy);

            product.inCart = true;

            product.style = {'display':'none'};

        };

    }//constructor

    __JqueryCode(){

        setTimeout(() => {

            $('.dropdown-toggle').dropdown();
            (function() {
                [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {

                    if(el.id !== 'select-lang' && !el.classList.contains('select-true')){

                        new SelectFx(el);

                        el.classList.add('select-true');

                    }//if

                } );
            })();

        }, 100);

    }//__JqueryCode

}//CatalogController