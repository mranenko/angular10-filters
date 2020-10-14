import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

/* app pages */
import {MembersPageComponent} from './pages/members-page/members-page.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'members',
  },
  {
    path: 'members',
    pathMatch: 'full',
    component: MembersPageComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
