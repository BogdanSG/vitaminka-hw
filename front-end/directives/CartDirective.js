"use strict";

import CartController from "../controllers/CartController";

export default function CartDirective(){

    return {

        restrict: 'C',
        templateUrl: 'templates/directives/CartDirective.html',
        controller: ['$scope', 'CartService', CartController]

    }//return

}//CartDirective