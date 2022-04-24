import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { User } from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  collectionName: string = 'user_crud';

  constructor(
    private angularFireStore: AngularFirestore
  ) {
  }

  getUsers() {
    return this.angularFireStore.collection(this.collectionName)
      .snapshotChanges();
  }

  getUserById(id: string) {
    return this.angularFireStore.collection(this.collectionName)
      .doc(id).valueChanges();
  }

  createUser(user: User) {
    return new Promise<any>((resolve, reject) => {
      this.angularFireStore.collection(this.collectionName)
        .add(user)
        .then((response) => {
          console.log(response)
        }, (error) => reject(error));
    });
  }

  deleteUser(user: User) {
    return this.angularFireStore.collection(this.collectionName)
      .doc(user.id)
      .delete();
  }

  updateUser(user: User, id: string){
    return this.angularFireStore.collection(this.collectionName).doc(id).update({
      name: user.name,
      email: user.email,
      contact: user.contact
    });
  }
}
