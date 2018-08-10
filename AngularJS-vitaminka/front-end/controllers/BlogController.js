"use strict";

export default class BlogController {

    constructor($scope, BlogService){

        this.$scope = $scope;

        this.$scope.blog = [];

        BlogService.getBlog().then(blog => {

            this.$scope.blog = blog;
            this.$scope.$apply();

        });

    }//constructor

}//BlogController