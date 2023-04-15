import { products } from './InterFace/products';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products:products[],searchTerm:string): products[] {
    return products.filter((product)=>{
      return product.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    });
  }

}
