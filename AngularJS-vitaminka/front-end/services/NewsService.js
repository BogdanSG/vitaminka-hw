"use strict";

export default class NewsService{

    constructor($http){

        this.$http = $http;

    }//constructor

    async getNews(url = 'app_data/news.json'){

        try{

            let result = await this.$http.get( url );

            return result.data;

        }//try
        catch(ex){

            console.log("Exception: getNews" , ex);
            return [];

        }//catch

    }//getCatalog

}//NewsService