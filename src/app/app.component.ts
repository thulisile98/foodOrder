import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Firestore } from 'firebase/firestore';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foodOrder';
  username: string = '';

  constructor(public userservice: UserService) { }



}
