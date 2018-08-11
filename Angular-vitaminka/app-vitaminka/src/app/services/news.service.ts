import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http : HttpClient){

  }//constructor

  async getNews(url = 'assets/app_data/news.json'){

      try{

          let result = await this.http.get(url).toPromise();

          return result;

      }//try
      catch(ex){

          console.log("Exception: getNews" , ex);
          return [];

      }//catch

  }//getCatalog



}//NewsService
