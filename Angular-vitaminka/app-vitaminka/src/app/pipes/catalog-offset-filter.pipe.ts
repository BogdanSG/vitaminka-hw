import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'catalogOffsetFilter'
})
export class CatalogOffsetFilterPipe implements PipeTransform {

  transform(catalog: any, offset: any): any {

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

  }//transform

}//CatalogOffsetFilterPipe
