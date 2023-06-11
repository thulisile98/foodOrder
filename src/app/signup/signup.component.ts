import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import validateForm from 'src/app/helpers/validateform';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { deleteDoc, doc, setDoc, updateDoc, } from "firebase/firestore";
import { Observable } from 'rxjs';

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
  userData!: Observable<any>;

  constructor(private fb: FormBuilder, private firestore: Firestore) {
    this.firestore = firestore;
    this.getData();
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
      alert("Succesfully Registered");
    } else {
      validateForm.validateAllFormFields(this.signUpForm);
      alert("Invalid user input");
    }
  }

  getData() {
    const collectionInstance = collection(this.firestore, 'users');
    collectionData(collectionInstance).subscribe(val => {
      console.log(val);
    })
    this.userData = collectionData(collectionInstance, { idField: 'email' });
  }

  updateData(email: string) {
    const docInstance = doc(this.firestore, 'users', email);
    const updateData = {
      username: 'updatedname',
      email: 'updatedname',
      firstname: 'updatedname',
      password: 'updatedname',
      lastname: 'updatedname',
    }

    updateDoc(docInstance, updateData)
      .then(() => {
        console.log('data updated');
      })
      .catch((error) => {
        console.log('error');
      })
  }

  deleteData(email: string) {
    const docInstance = doc(this.firestore, 'users', email);
    deleteDoc(docInstance)
      .then(() => {
        console.log('deleted data');
      })

  }
}
