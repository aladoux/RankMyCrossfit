import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterPipePipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any, input: any): any {
    if(input) {
      return value.filter(val => val.indexOf(input) >= 0);
    }
    else{
      return value;
    }
  }

}
