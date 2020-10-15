import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'filterCountry'
})
export class FilterCountryPipe implements PipeTransform {
  transform(items: any[], country: string): any[] {
    /* no data or no country filter specified */
    if (items.length === 0 || country === undefined || country === '') {
      return items;
    }

    return items.filter(item =>
      (item.country.toLowerCase() === country.toLowerCase())
    );
  }
}
