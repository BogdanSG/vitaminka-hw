"use strict";

export default class HeaderController {

    constructor($scope, $translate, $cookies, CartService, LocaleService){

        this.$scope = $scope;

        this.$scope.cart = CartService.getCart();

        let cookieLang = $cookies.get('lang');

        if(cookieLang)
            $translate.use(cookieLang);
        else
            $translate.use('RU');

        LocaleService.getLangs().then(langs => {

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

                        $translate.use(lang);
                        $cookies.put('lang', lang);

                    }//onChange
                }
            );

        });

    }//constructor

}//HeaderController