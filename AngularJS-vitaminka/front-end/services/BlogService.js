"use strict";

export default class BlogService{

    constructor($http){

        this.$http = $http;

    }//constructor

    async getBlog(url = 'app_data/blog.json'){

        try{

            let result = await this.$http.get( url );

            return result.data;

        }//try
        catch(ex){

            console.log("Exception: getBlog" , ex);
            return [];

        }//catch

    }//getBlog

    async getBlogByID(id, url = 'app_data/blog.json'){

        try{

            let result = await this.$http.get( url );

            for(let i = 0; i < result.data.length; i++){

                if(result.data[i].id == id){

                    return result.data[i];

                }//if

            }//for

        }//try
        catch(ex){

            console.log("Exception: getBlogByID" , ex);
            return {};

        }//catch

    }//getBlogByID


}//BlogService