"use strict";

export default class CatalogController {

    constructor($scope, CatalogService){

        this.$scope = $scope;

        this.$scope.catalog = [];

        CatalogService.getCatalog().then(catalog => {

            this.$scope.catalog = catalog;
            this.$scope.$apply();
            this.__JqueryCode();

        });

    }//constructor

    __JqueryCode(){

        $('.dropdown-toggle').dropdown();
        (function() {
            [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {

                if(el.id !== 'select-lang'){

                    new SelectFx(el);

                }//if

            } );
        })();

    }//__JqueryCode

}//CatalogController