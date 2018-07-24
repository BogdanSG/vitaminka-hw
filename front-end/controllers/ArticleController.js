"use strict";

export default class BlogController {

    constructor($scope, BlogService, id){

        this.$scope = $scope;

        this.$scope.singleBlog = {};

        BlogService.getBlogByID(id).then(singleBlog => {

            this.$scope.singleBlog = singleBlog;
            this.$scope.$apply();

        });

    }//constructor

}//BlogController