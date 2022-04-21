import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from "./components/create-user/create-user.component";
import { ListUserComponent } from "./components/list-user/list-user.component";
import { EditUserComponent } from "./components/edit-user/edit-user.component";

const routes: Routes = [
  { path: '', redirectTo: '/create', pathMatch: 'full' },
  { path: 'create', component: CreateUserComponent },
  { path: 'list-users', component: ListUserComponent },
  { path: 'update-user/:id', component: EditUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
