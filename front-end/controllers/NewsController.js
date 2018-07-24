"use strict";

export default class NewsController {

    constructor($scope, NewsService){

        this.$scope = $scope;

        this.$scope.news = [];

        NewsService.getNews().then(news => {

            this.$scope.news = news;
            this.$scope.$apply();

        });

    }//constructor

}//NewsController