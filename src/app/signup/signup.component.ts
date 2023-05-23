import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import validateForm from 'src/app/helpers/validateform';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { doc, setDoc } from "firebase/firestore";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {


  type: string = "password";

  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  signUpForm!: FormGroup;

  constructor(private fb: FormBuilder, private firestore: Firestore) {
    this.firestore = firestore;
  }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }
  saveData(): void {
    if (this.signUpForm.valid) {
      const userData = { ...this.signUpForm.value };
      setDoc(doc(this.firestore, 'users', userData.email), userData)
        .then(() => {
          console.log('Data saved:', userData);
        })
        .catch((error) => {
          console.error('Error saving data:', error);
        });
    } else {
      validateForm.validateAllFormFields(this.signUpForm);
      alert('Invalid user input');
    }
  }
  onSubmit(): void {
    if (this.signUpForm.valid) {
      this.saveData();
    } else {
      validateForm.validateAllFormFields(this.signUpForm);
      alert("Invalid user input");
    }
  }
}
