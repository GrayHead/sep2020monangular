import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';

const routes: Routes = [
  {
    // users
    path: '', component: UsersComponent, children: [
      // users/10
      {path: ':id', component: UserComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
