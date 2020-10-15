import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'filterDateSince'
})
export class FilterDateSincePipe implements PipeTransform {
  transform(items: any[], dateSince: string): any[] {
    if (items.length === 0 || dateSince === '') {
      return items;
    }
    else {
      return items.filter(item =>
        (new Date(item['date-since']).getTime() >= new Date(dateSince).getTime())
      );
    }
  }
}
