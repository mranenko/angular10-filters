import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filterCountry'
})
export class FilterCountryPipe implements PipeTransform {
  transform(items: any[], country: string): any[] {
    if (items.length === 0 || country === '') {
      return items;
    }
    else {
      return items.filter(item =>
        (item['country'].toLowerCase() === country.toLowerCase())
      );
    }

    console.log(`filter country: ${country}`);
  }
}
