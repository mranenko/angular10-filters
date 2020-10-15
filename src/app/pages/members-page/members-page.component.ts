import {Component, OnInit} from '@angular/core';

/* app services */
import {MembersService} from '../../services/members.service';
import {CountriesService} from '../../services/countries.service';


@Component({
  selector: 'app-members-page',
  templateUrl: './members-page.component.html',
  styleUrls: ['./members-page.component.scss']
})
export class MembersPageComponent implements OnInit {
  countries: any[];
  members: any[];

  /* selected filters */
  filters = {};

  constructor(private countriesService: CountriesService,
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

  onFiltersReset(): void {
    this.filtersReset();
  }


  /*
    Private methods
   */

  private filtersReset(): void {
    this.filters = {
      country: '',
      dateSince: '',
      firstName: '',
      lastName: '',
    };
  }
}
