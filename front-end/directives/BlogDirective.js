"use strict";

import BlogController from '../controllers/BlogController';

export default function BlogDirective(){

    return {

        restrict: 'C',
        templateUrl: 'templates/directives/BlogDirective.html',
        controller: ['$scope', 'BlogService', BlogController]

    }//return

}//BlogDirective