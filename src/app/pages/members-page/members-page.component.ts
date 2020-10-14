import {Component, OnInit} from '@angular/core';

/* app services */
import {MembersService} from '../../services/members.service';


@Component({
  selector: 'app-members-page',
  templateUrl: './members-page.component.html',
  styleUrls: ['./members-page.component.scss']
})
export class MembersPageComponent implements OnInit {
  members: [];

  constructor(private membersService: MembersService) {
  }

  ngOnInit(): void {
    this.members = this.membersService.getMembers();
  }
}
