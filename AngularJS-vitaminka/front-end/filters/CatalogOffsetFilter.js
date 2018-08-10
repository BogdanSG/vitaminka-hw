"use strict";

export default function CatalogOffsetFilter() {

    return function(catalog, offset){

        if(offset >= catalog.length){

            return catalog;

        }//if
        else {

            let newCatalog = [];

            for(let i = 0; i < offset; i++){

                newCatalog.push(catalog[i]);

            }//for

            return newCatalog;

        }//else

    }//function

}//CatalogSortFilter