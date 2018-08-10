"use strict";

import NewsController from '../controllers/NewsController';

export default function NewsDirective(){

    return {

        restrict: 'C',
        templateUrl: 'templates/directives/NewsDirective.html',
        controller: ['$scope', 'NewsService', NewsController]

    }//return

}//NewsDirective