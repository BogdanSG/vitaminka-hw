"use strict";

export default class CatalogController {

    constructor($scope, $stateParams, CatalogService){

        this.$scope = $scope;

        this.$scope.catalog = [];

        if($stateParams.sortParam){

            this.$scope.sortParam = $stateParams.sortParam;

        }//if
        else {

            this.$scope.sortParam = 'all';

        }//else

        this.$scope.offset = 8;

        this.$scope.addOffset = () => {

            if(this.$scope.catalog.length > this.$scope.offset)
                this.$scope.offset += 4;

        };

        this.$scope.ngRepeatFinish = () => {

            this.__JqueryCode();

        };

        CatalogService.getCatalog().then(catalog => {

            this.$scope.catalog = catalog;
            this.$scope.$apply();

        });

    }//constructor

    __JqueryCode(){

        $('.dropdown-toggle').dropdown();
        (function() {
            [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {

                if(el.id !== 'select-lang' && !el.classList.contains('select-true')){

                    new SelectFx(el);

                    el.classList.add('select-true');

                }//if

            } );
        })();

    }//__JqueryCode

}//CatalogController