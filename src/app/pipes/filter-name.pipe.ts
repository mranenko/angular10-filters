import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'filterName'
})
export class FilterNamePipe implements PipeTransform {
  transform(items: any[], filters: object): any {
    /* no data or no name filters specified */
    if (items.length === 0 || filters === undefined || filters === {}) {
      return items;
    }

    let filteredItems = items;

    for (const [key, value] of Object.entries(filters)) {
      filteredItems = filteredItems.filter(item =>
        item[key].toLowerCase().startsWith(value.toLowerCase())
      );
    }

    return filteredItems;
  }
}
