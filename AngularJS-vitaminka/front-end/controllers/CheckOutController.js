"use strict";

export default class CheckOutController {

    constructor($scope, CartService, PromoCodeService){

        this.$scope = $scope;

        this.$scope.cart = CartService.getCart();

        this.$scope.discount = 0;

        this.$scope.codeText = '';

        this.$scope.getAllDiscountPrice = () => {

            let price = CartService.getAllPrice();

            return price - (price * this.$scope.discount);

        };

        this.$scope.getAllCount = () => {

            return CartService.getAllCount();

        };

        this.$scope.getDiscountPrice = (product) => {

            return product.price - (product.price * this.$scope.discount);

        };

        this.$scope.applyCode = (codeText) => {

            if(this.$scope.codes){

                for(let i = 0; i < this.$scope.codes.length; i++){

                    if(this.$scope.codes[i].code === codeText) {

                        this.$scope.discount = this.$scope.codes[i].discount;

                        return;

                    }//if

                }//for

                this.$scope.discount = 0;

            }//if

        };

        this.$scope.applyCheckOut = () => {

            CartService.clearCart();

        };

        //Это не правильно, но так как это чистый front-end, пока так

        PromoCodeService.getPromoCodes().then(codes => {

            this.$scope.codes = codes;

            this.$scope.$apply();

        });

        this.$scope.delivery = 20;

    }//constructor

}//CheckOutController