"use strict";

export default class PromoCodeService{

    constructor($http){

        this.$http = $http;

    }//constructor

    async getPromoCodes(url = 'app_data/promo-codes.json'){

        try{

            let result = await this.$http.get(url);

            return result.data;

        }//try
        catch(ex){

            console.log("Exception: getPromoCodes" , ex);
            return [];

        }//catch

    }//getCatalog

}//PromoCodeService