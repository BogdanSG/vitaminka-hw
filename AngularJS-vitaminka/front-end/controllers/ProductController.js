"use strict";

export default class ProductController {

    constructor($scope, CartService, product){

        this.$scope = $scope;

        this.$scope.product = product;

        let cart = CartService.getCart();

        if(cart.some( p => p.id === product.id)){

            product.inCart = true;

        }//if
        else {

            product.inCart = false;

        }//else

        product.amount = 1;

        this.$scope.addProductToCart = product => {

            if(this.$scope.product.amount === '')
                return;

            let copy = Object.assign({}, product);

            CartService.addProduct(copy);

            product.inCart = true;

        };

        this.$scope.amountChange = () => {

            if(this.$scope.product.amount === '')
                return;

            let number = +this.$scope.product.amount;

            if(number && number > 0){

            }//if
            else {

                this.$scope.product.amount = 1;

            }//else

        };


    }//constructor

}//ProductController