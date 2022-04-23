import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { UserService } from "../../services/user.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  public editForm: FormGroup;
  userRef: any;

  constructor(
    public userService: UserService,
    public formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.createEditForm();
    this.onEditInit();
  }

  createEditForm() {
    this.editForm = this.formBuilder.group({
      name: [''],
      email: [''],
      contact: [''],
    });
  }

  onEditInit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');

    this.userService.getUserById(id).subscribe((response) => {
      this.userRef = response;
      this.editForm = this.formBuilder.group({
        name: [this.userRef.name],
        email: [this.userRef.email],
        contact: [this.userRef.contact]
      })
    })
  }

  onSubmit(){
    const id = this.activeRoute.snapshot.paramMap.get('id');

    this.userService.updateUser(this.editForm.value, id);
    this.router.navigate(['list-users']);
  }

}
