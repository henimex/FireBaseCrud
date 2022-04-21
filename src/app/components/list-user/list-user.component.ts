import { Component, OnInit } from '@angular/core';
import { User } from "../../models/user.model";
import { UserService } from "../../services/user.service";
import { user } from "@angular/fire/auth";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  Users: User[];

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe((response) => {
      this.Users = response.map((data) => {
        return {
          id: data.payload.doc.id,
          ...(data.payload.doc.data() as User)
        };
      });
    });
  }

  removeUser(user: User){
    this.userService.deleteUser(user).
    then(r => {
      console.log('User Deleted');
    });
  }

  //removeUser = (user) => this.userService.deleteUser(user);

}
