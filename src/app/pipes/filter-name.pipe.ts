import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'filterName'
})
export class FilterNamePipe implements PipeTransform {
  transform(items: any[], filters: object): any {
    if (items.length === 0 || filters === {}) {
      return items;
    }
    else {
      let filteredItems = items;

      for (const filter in filters) {
        if (filters.hasOwnProperty(filter)) {
          filteredItems = filteredItems.filter(item =>
            item[filter].toLowerCase().startsWith(filters[filter].toLowerCase())
          );
        }
      }

      return filteredItems;
    }
  }
}
