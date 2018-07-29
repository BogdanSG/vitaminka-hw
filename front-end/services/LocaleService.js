"use strict";

export default class LocaleService{

    constructor($http){

        this.$http = $http;

    }//constructor

    async getLangs(url = 'app_data/langs/langs.json'){

        try{

            let response = await this.$http.get(url);

            return response.data;

        }//try
        catch(ex){

            console.log("Exception: getLangs" , ex);
            return [];

        }//catch

    }//getLangs

    // async getTranslations(lang, url = `app_data/langs/${lang}.json`){
    //
    //     try{
    //
    //         let response = await this.$http.get(url);
    //
    //         return response.data;
    //
    //     }//try
    //     catch(ex){
    //
    //         console.log("Exception: getTranslations" , ex);
    //         return {};
    //
    //     }//catch
    //
    // }//getTranslations

}//LocaleService