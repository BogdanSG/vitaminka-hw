import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

    constructor(private http : HttpClient){

    }//constructor

    async getBlog(url = 'assets/app_data/blog.json'){

        try{

            let result = await this.http.get(url).toPromise();

            return result

        }//try
        catch(ex){

            console.log("Exception: getBlog" , ex);
            return [];

        }//catch

    }//getBlog

    async getBlogByID(id, url = 'assets/app_data/blog.json'){

        try{

            let result: any = await this.http.get( url ).toPromise();

            for(let i = 0; i < result.length; i++){

                if(result[i].id == id){

                    return result[i];

                }//if

            }//for

        }//try
        catch(ex){

            console.log("Exception: getBlogByID" , ex);
            return {};

        }//catch

    }//getBlogByID

}//BlogService

