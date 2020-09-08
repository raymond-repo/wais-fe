import { Component, OnInit, Inject } from '@angular/core';
import { UserQuery } from '../../query/user.query';
import { UserStore } from '../../store/user.store';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user.model';
import { filter } from 'rxjs/operators';
import { StorageUtil } from '../../util/storage.util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public user: User[];
  public name: string;

  constructor(
    private userService: UserService,
    private userQuery: UserQuery
  ) { }

  ngOnInit() {
    this.userService.getUser();
    this.userQuery.select()
      .pipe(
        filter(res => res.user.length !== 0)
      )
      .subscribe(res => {
        this.user = res.user;
      });
  }

  public add() {
    this.name = 'add';
    const user: User = {
      "id": '',
      "firstName": "admin",
      "lastName": "admin",
      "email": "admin@mail.com",
      "address": "admin",
      "gender": "admin",
      "username": "admin",
      "password": "admin"
    };

    this.userService.addUser(user).subscribe(() => {
      this.userService.getUser();
    });
  }

  public delete() {
    this.name = 'delete';
    this.userService.deleteUser('5').subscribe(() => {
      this.userService.getUser();
    });
  }

}
