export class FilterMember {
  firstName: string;
  lastName: string;
  country: string;
  memberSince: string;

  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.country = '';
    this.memberSince = '';
  }

  reset(): void {
    this.firstName = '';
    this.lastName = '';
    this.country = '';
    this.memberSince = '';
  }
}
