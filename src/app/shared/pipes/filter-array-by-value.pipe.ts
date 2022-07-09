import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArrayByValue'
})
export class FilterArrayByValuePipe implements PipeTransform {

  transform(array: any[] | null, filterString: string, filterField: string): any[] {
    if (!array) {
      return [];
    }

    if (!filterString) {
      return array;
    }

    return array.filter(value => {
      return value[filterField]?.includes(filterString);
    })
  }

}
