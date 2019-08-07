import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {UsersListComponent} from "./users-list/users-list.component";

const myAppRoutes: Routes = [
  {path: 'userList', component: UsersListComponent, children: [
      {path: 'userList/:id', component: UserDetailComponent}
    ]},
  {path: 'userDetail', component: UserDetailComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(myAppRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
