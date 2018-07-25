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

    async getProductByID(id, url = 'app_data/catalog.json'){

        try{

            let result = await this.$http.get( url );

            for(let i = 0; i < result.data.length; i++){

                if(result.data[i].id == id){

                    return result.data[i];

                }//if

            }//for

        }//try
        catch(ex){

            console.log("Exception: getProductByID" , ex);
            return {};

        }//catch

    }//getProductByID

}//CatalogService