import { Pipe, PipeTransform } from '@angular/core';

import { Product } from './product';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(allProd: Product[], args: string) {
    console.log(`here ${args}`);

    if (!args || args === undefined) {
      return allProd;
    } else {
      return allProd.filter(ele => ele.name === args);
    }
  }

}
