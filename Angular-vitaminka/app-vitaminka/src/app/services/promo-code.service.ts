import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PromoCodeService {

  constructor(private http : HttpClient) {

  }//constructor

  async getPromoCodes(url = 'assets/app_data/promo-codes.json'){

    try{

      let result = await this.http.get(url).toPromise();

      return result;

    }//try
    catch(ex){

      console.log("Exception: getPromoCodes" , ex);
      return [];

    }//catch

  }//getCatalog

}//PromoCodeService
