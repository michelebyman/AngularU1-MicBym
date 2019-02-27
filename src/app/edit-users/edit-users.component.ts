import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {
  //sets value to empty
  value:string = '';
  // sending an EventEmitter dashboard
  @Output()addUser = new EventEmitter<string>();
  // sending an EventEmitter dashboard
  @Output()removeUser = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  // adds user if we type anything and click the button add the if statement checks so you have to type something this is an @Output so we sent this to value to dashboard through the html file and recives a variable in the ts file where we pushes it to the array
  onClickAddUser(){
    if (this.value !== '') {
      this.addUser.emit(this.value);
      this.value = '';
    }
  }

  // remove user if we click the button remove, removes the last added user from the array in the dashboard through the html file and recives
  onClickRemoveUser(){
    this.removeUser.emit();
  }

}
