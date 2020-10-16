import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  constructor() {
  }

  getCountries(): string[] {
    return [
      'Argentina',
      'Azerbaijan',
      'Bahrain',
      'Brazil',
      'Cameroon',
      'Canada',
      'China',
      'Colombia',
      'Croatia',
      'Cuba',
      'Czech Republic',
      'Dominican Republic',
      'Ethiopia',
      'Finland',
      'France',
      'Germany',
      'Greece',
      'Indonesia',
      'Japan',
      'Laos',
      'Latvia',
      'Madagascar',
      'Mexico',
      'Micronesia',
      'Mongolia',
      'Nicaragua',
      'Pakistan',
      'Paraguay',
      'Peru',
      'Poland',
      'Portugal',
      'Philippines',
      'Russia',
      'South Korea',
      'Sweden',
      'Syria',
      'Tanzania',
      'Ukraine',
      'United States',
      'Venezuela',
      'Vietnam',
      'Yemen',
    ];
  }
}
