import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http : HttpClient){

  }//constructor

  async getCatalog(url = 'assets/app_data/catalog.json'){

    try{

        let result = await this.http.get(url).toPromise();

        return result;

    }//try
    catch(ex){

        console.log("Exception: getCatalog" , ex);
        return [];

    }//catch

  }//getCatalog

  async getProductByID(id, url = 'assets/app_data/catalog.json'){

      try{

          let result: any = await this.http.get(url).toPromise();

          for(let i = 0; i < result.length; i++){

              if(result[i].id == id){

                  return result[i];

              }//if

          }//for

      }//try
      catch(ex){

          console.log("Exception: getProductByID" , ex);
          return {};

      }//catch

  }//getProductByID

  async getProductByIDS(ids, url = 'assets/app_data/catalog.json'){

      try{

          let result: any = await this.http.get(url).toPromise();

          let products = [];

          for(let i = 0; i < result.length; i++){

              if(ids.indexOf(result[i].id) !== -1){

                  products.push(result[i]);

              }//if

          }//for

          return products;

      }//try
      catch(ex){

          console.log("Exception: getProductByIDS" , ex);
          return [];

      }//catch

  }//getProductByID

}//CatalogService
