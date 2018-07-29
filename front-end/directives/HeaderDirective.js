"use strict";

import HeaderController from "../controllers/HeaderController";

export default function HeaderDirective(){

    return {

        restrict: 'C',
        templateUrl: 'templates/directives/HeaderDirective.html',
        controller: ['$scope', '$translate', '$cookies', 'CartService', 'LocaleService', HeaderController],

    }//return

}//HeaderDirective