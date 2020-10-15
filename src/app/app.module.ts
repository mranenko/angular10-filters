import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

/* app pages */
import {MembersPageComponent} from './pages/members-page/members-page.component';

/* app pipes */
import {FilterCountryPipe} from './pipes/filter-country.pipe';
import {FilterDateSincePipe} from './pipes/filter-date-since.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MembersPageComponent,
    FilterCountryPipe,
    FilterDateSincePipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [
    FilterCountryPipe,
    FilterDateSincePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
