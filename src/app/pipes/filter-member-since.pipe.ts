import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'filterMemberSince'
})
export class FilterMemberSincePipe implements PipeTransform {
  transform(items: any[], memberSince: string): any[] {
    /* no data or no date filter specified */
    if (items.length === 0 || memberSince === undefined || memberSince === '') {
      return items;
    }

    return items.filter(item =>
      (new Date(item['member-since']).getTime() >= new Date(memberSince).getTime())
    );
  }
}
