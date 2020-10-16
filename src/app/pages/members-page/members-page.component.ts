import {Component, OnInit} from '@angular/core';

/* app pipes */
import {FilterCountryPipe} from '../../pipes/filter-country.pipe';
import {FilterMemberSincePipe} from '../../pipes/filter-member-since.pipe';
import {FilterNamePipe} from '../../pipes/filter-name.pipe';

/* app services */
import {MembersService} from '../../services/members.service';
import {CountriesService} from '../../services/countries.service';


@Component({
  selector: 'app-members-page',
  templateUrl: './members-page.component.html',
})
export class MembersPageComponent implements OnInit {
  countries: any[];
  members: any[];
  membersFiltered: any[];

  /* selected filters */
  filters = {};

  constructor(private filterCountryPipe: FilterCountryPipe,
              private filterMemberSincePipe: FilterMemberSincePipe,
              private filterNamePipe: FilterNamePipe,
              private countriesService: CountriesService,
              private membersService: MembersService) {
  }

  ngOnInit(): void {
    this.countries = this.countriesService.getCountries();
    this.members = this.membersService.getMembers();
    this.filtersReset();
  }


  /*
    Event handlers
   */

  onFiltersChange(): void {
    this.filtersApply();
  }

  onFiltersReset(): void {
    this.filtersReset();
  }


  /*
    Private methods
   */

  private filtersApply(): void {
    this.membersFiltered = this.members;
    this.membersFiltered = this.filterCountryPipe.transform(this.membersFiltered, this.filters.country);
    this.membersFiltered = this.filterMemberSincePipe.transform(this.membersFiltered, this.filters.memberSince);
    this.membersFiltered = this.filterNamePipe.transform(this.membersFiltered,
      {
        'first-name': this.filters.firstName,
        'last-name': this.filters.lastName,
      });
  }

  private filtersReset(): void {
    this.filters = {
      country: '',
      memberSince: '',
      firstName: '',
      lastName: '',
    };

    this.filtersApply();
  }
}
