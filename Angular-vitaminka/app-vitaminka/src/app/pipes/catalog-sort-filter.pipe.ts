import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'catalogSortFilter'
})
export class CatalogSortFilterPipe implements PipeTransform {

  transform(catalog: any, sortParam: any): any {

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

  }//transform

}//CatalogSortFilterPipe
