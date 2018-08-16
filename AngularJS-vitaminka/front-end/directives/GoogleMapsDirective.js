"use strict";

import GoogleMapsController from "../controllers/GoogleMapsController";

export default function GoogleMapsDirective(){

    return {

        restrict: 'C',
        templateUrl: 'templates/directives/GoogleMapsDirective.html',
        controller: ['$scope', 'NgMap', GoogleMapsController]

    }//return

}//FooterDirective