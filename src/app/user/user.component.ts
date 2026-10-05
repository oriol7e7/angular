import { Component, input, output } from '@angular/core';
import { User } from './user.model';

@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.component.css',
  templateUrl: './user.component.html',
})
export class UserComponent {
  //prop
  public user = input.required<User>();
  //emit - selectUser will be the value to "catch" as an atributte from the component
  public selectUser = output<string>();
  public userSelected = input.required<boolean>();
  get imagePath(): string {
    return `/users/${this.user().avatar}`;
  }
  public onSelectedUser() {
    this.selectUser.emit(this.user().id);
  }
}
