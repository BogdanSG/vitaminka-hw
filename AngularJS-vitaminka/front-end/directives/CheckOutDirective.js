"use strict";

import CheckOutController from '../controllers/CheckOutController';

export default function CheckOutDirective(){

    return {

        restrict: 'C',
        templateUrl: 'templates/directives/CheckOutDirective.html',
        controller: ['$scope', 'CartService', 'PromoCodeService', CheckOutController]

    }//return

}//CheckOutDirective