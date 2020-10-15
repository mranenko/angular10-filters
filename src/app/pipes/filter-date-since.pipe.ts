import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'filterDateSince'
})
export class FilterDateSincePipe implements PipeTransform {
  transform(items: any[], dateSince: string): any[] {
    /* no data or no date filter specified */
    if (items.length === 0 || dateSince === undefined || dateSince === '') {
      return items;
    }

    return items.filter(item =>
      (new Date(item['date-since']).getTime() >= new Date(dateSince).getTime())
    );
  }
}
