import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  //recives the userList through the html from the dashboard
  @Input() users:[];

  constructor() {
  }

  ngOnInit() {
  }

  //adding a property:boolean and craeating a method where we use the property on a clickevent so we can change value from true to false, where we add two different css-attributes.
  changeColor:boolean = true;
  onClickToggle() {
    this.changeColor = !this.changeColor;
  }

}
