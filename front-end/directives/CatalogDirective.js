"use strict";

export default function CatalogDirective(){

    return {

        restrict: 'C',
        templateUrl: 'templates/directives/CatalogDirective.html',
        link: function () {

            $('.dropdown-toggle').dropdown();
            (function() {
                [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {

                    if(el.id !== 'select-lang'){

                        new SelectFx(el);

                    }//if

                } );
            })();

        }//function

    }//return

}//SmallMenuDirective