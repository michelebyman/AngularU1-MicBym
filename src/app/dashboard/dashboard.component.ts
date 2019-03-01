import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //creating a property as an Array passing in a string
  userList:string[] = ["Users should be added or removed"];

  constructor() {
   }

  ngOnInit() {
  }

 //recives parameter from edit-users.componet.ts(@Output addUser: new EventEmitter) through the dashboard.component.html where we add (addUser)="onAddUser($event) then Adds user to userList[]
  onAddUser(user:string):void{
    this.userList.push(user);
  }
  //removes user from userList[] but not the last one
  onRemoveUser():void{
    if (this.userList.length > 1) {
      this.userList.pop();
    }

  }
}
