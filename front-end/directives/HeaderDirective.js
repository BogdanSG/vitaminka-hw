"use strict";

import HeaderController from "../controllers/HeaderController";

export default function HeaderDirective(){

    return {

        restrict: 'C',
        templateUrl: 'templates/directives/HeaderDirective.html',
        controller: ['$scope', 'CartService', HeaderController]

    }//return

}//HeaderDirective