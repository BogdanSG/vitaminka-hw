"use strict";

export default class CartController {

    constructor($scope, CartService){

        this.$scope = $scope;

        this.$scope.cart = CartService.getCart();

        this.$scope.getAllPrice = () => {

            return CartService.getAllPrice();

        };

        this.$scope.getAllCount = () => {

            return CartService.getAllCount();

        };

        this.$scope.amountChange = product => {

            if(product.amount === '')
                return;

            let number = +product.amount;

            if(number && number > 0){

            }//if
            else {

                product.amount = 1;

            }//else

            CartService.saveToCookies();

        };

        this.$scope.deleteProductInCart = $index => {

            CartService.deleteProductByIndex($index);

        };

    }//constructor

}//CartController