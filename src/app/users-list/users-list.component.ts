import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {UsersGetService} from "../test-app.get.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, OnDestroy {
  usersId: {id: number};
  paramSubscription: Subscription;
 users: any[];


  constructor(private router: Router, private route: ActivatedRoute, private getService: UsersGetService  ) { }


  ngOnInit() {
    this.usersId = {
      id: this.route.snapshot.params['id']
    };

    this.paramSubscription = this.route.params.subscribe(
      (param: Params) => {
        this.usersId.id = param['id'];
      }
    )
  }


  getUsersList(){
    this.getService.getUsers().subscribe(
      (resObject: Object) => {
        this.users = resObject['results'];
      }
    );
  }

  onUserClicked() {
      this.getService.getUniqueUser().subscribe(
        (resObject: Object) => {
          console.log(resObject);
        }
      );

  }


  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }


}
