import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  public userForm: FormGroup;

  constructor(
    public userService: UserService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
  }

  ngOnInit(): void {
    this.createUserForm();
  }

  createUserForm(){
    this.userForm = this.formBuilder.group({
      name:[''],
      email:[''],
      contact:['']
    });
  }

  onSubmit(){
    this.userService.createUser(this.userForm.value);
    this.router.navigate(['list-users']);
  }
}
