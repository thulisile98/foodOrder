import { Component } from '@angular/core';
import validateForm from 'src/app/helpers/validateform';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { doc, getDoc, } from "firebase/firestore";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private firestore: Firestore) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })


  }
  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

  async logIn() {
    const userData = { ...this.loginForm.value };
    const docRef = doc(this.firestore, 'users', userData.email);
    const docSnap = await getDoc(docRef);

    console.log(docSnap);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {

      console.log("User dont exits Register Account");
    }
  }
  onSubmit() {
    if (this.loginForm.valid) {
      this.logIn();
    } else {
      validateForm.validateAllFormFields(this.loginForm)
      alert("invalid user input");
      // error
    }

  }
}


