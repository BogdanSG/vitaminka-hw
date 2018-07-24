"use strict";

import CatalogController from '../controllers/CatalogController';

export default function CatalogDirective(){

    return {

        restrict: 'C',
        templateUrl: 'templates/directives/CatalogDirective.html',
        controller: ['$scope', 'CatalogService', CatalogController]

    }//return

}//SmallMenuDirective