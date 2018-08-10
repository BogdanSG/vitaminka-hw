import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app-vitaminka';

  constructor(private CookieService : CookieService, private translate: TranslateService) {

    let cookieLang = this.CookieService.get('lang');

    if(cookieLang){

      translate.setDefaultLang(cookieLang);

    }//if
    else{

      translate.setDefaultLang('RU');
      this.CookieService.set('lang', 'RU');

    }//else

  }//constructor

}//AppComponent
