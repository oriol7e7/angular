import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-users';
import { User } from './user/user.model';

@Component({
  imports: [HeaderComponent, UserComponent, TasksComponent],
  selector: 'app-root',
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public userList: User[] = DUMMY_USERS;
  selectedUserId?: string;
  //Function to do when the emit is catched
  public onSelectedUser(id: string) {
    this.selectedUserId = id;
  }
  get selectedUser(){
    return this.userList.find(u => u.id === this.selectedUserId)
  }
}
