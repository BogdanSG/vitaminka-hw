"use strict";

export default class CartController {

    constructor($scope, CartService){

        this.$scope = $scope;

        this.$scope.cart = CartService.getCart();

        this.$scope.getAllPrice = () => {

            let allPrice = 0;

            this.$scope.cart.forEach(item => {

                allPrice += item.price * item.amount;

            });

            return allPrice;

        };

        this.$scope.getAllCount = () => {

            let allCount = 0;

            this.$scope.cart.forEach(item => {

                allCount += +item.amount;

            });

            return allCount;

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