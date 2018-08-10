import { Component, OnInit } from '@angular/core';
import { LocaleService } from '../../services/locale.service';
import { CartService } from '../../services/cart.service';
import { CookieService } from 'ngx-cookie-service';
import { TranslateService } from '@ngx-translate/core';

declare var $;
declare var Snap;
declare var SelectFx;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cart: Array<any>;

  constructor(private CookieService : CookieService, private translate: TranslateService, private CartService : CartService, private LocaleService : LocaleService){

    this.cart = CartService.getCart();

    let cookieLang = this.CookieService.get('lang');

    if(cookieLang)
      this.translate.use(cookieLang);
    else
      this.translate.use('RU');

    this.LocaleService.getLangs().then(langs => {

      if(Array.isArray(langs)){

        let options = '';

        langs.forEach( (lang) => {

          if(cookieLang === lang)
            options += `<option value="${lang}" selected>${lang}</option>`;
          else
            options += `<option value="${lang}" >${lang}</option>`;

        } );

        let elem = document.querySelector('#select-lang');

        elem.innerHTML = options;

        new SelectFx(
          elem,
          {
            onChange: lang => {

              this.translate.use(lang);
              this.CookieService.set('lang', lang);

            }//onChange
          }
        );

      }//if

    });

  }//constructor

  ngOnInit() {

    this.__Script();

  }//ngOnInit

  __Script(){

    $(document).ready(function(){
      $('#content').scroll(function(){
        if($('#content').scrollTop() > 40){//window

          $('.header').addClass('headerFluid');
          $('#menuOpen').removeClass('hidden');

        }else{
          $('.header').removeClass('headerFluid');
          $('#menuOpen').addClass('hidden');
        }

      });

      var snapper = new Snap({
        element: document.getElementById('content'),
        disable: 'right'
      });


      if(document.documentElement.clientWidth<991){
        snapper.enable();
      }else{
        snapper.disable();
      }
      $('.smallMenuA').click(function(){

        var data = snapper.state();
        if(data.state == 'closed'){
          snapper.open('left');
        }else{
          snapper.close();
        }
      });

//    $(".tabsContent").mCustomScrollbar({
//        axis:"x"
//    });
    });


  }//__Script

}//HeaderComponent
