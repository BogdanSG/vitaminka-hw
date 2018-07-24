"use strict";

export default class CatalogService{

    constructor($http){

        this.$http = $http;

    }//constructor

    async getCatalog(url = 'app_data/catalog.json'){

        try{

            let result = await this.$http.get( url );

            return result.data;

        }//try
        catch(ex){

            console.log("Exception: getCatalog" , ex);
            return [];

        }//catch

    }//getCatalog

}//CatalogService