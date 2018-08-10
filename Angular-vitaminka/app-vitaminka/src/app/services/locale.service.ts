import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  constructor(private http : HttpClient) {

  }//constructor

  async getLangs(url = 'assets/i18n/langs.json'){

    try{

      let response = await this.http.get(url).toPromise();

      return response;

    }//try
    catch(ex){

      console.log("Exception: getLangs" , ex);
      return [];

    }//catch

  }//getLangs

}//LocaleService
