"use strict";

export default function CatalogSortFilter() {

    return function(catalog, sortParam){

        if(sortParam === 'all'){

            return catalog;

        }//if
        else {

            let sortCatalog = [];

            catalog.forEach(item => {

                if(item.types.indexOf(sortParam) !== -1){

                    sortCatalog.push(item);

                }//if

            });

            return sortCatalog;

        }//else

    }//function

}//CatalogSortFilter