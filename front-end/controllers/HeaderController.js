"use strict";

export default class HeaderController {

    constructor($scope, CartService){

        this.$scope = $scope;

        this.$scope.cart = CartService.getCart();

    }//constructor

}//HeaderController