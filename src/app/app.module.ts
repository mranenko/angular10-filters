import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

/* app pages */
import {MembersPageComponent} from './pages/members-page/members-page.component';

/* app pipes */
import {FilterCountryPipe} from './pipes/filter-country.pipe';
import {FilterMemberSincePipe} from './pipes/filter-member-since.pipe';
import {FilterNamePipe} from './pipes/filter-name.pipe';


const appFilters = [
  FilterCountryPipe,
  FilterMemberSincePipe,
  FilterNamePipe,
];


@NgModule({
  declarations: [
    AppComponent,
    MembersPageComponent,
    ...appFilters,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [
    ...appFilters,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
