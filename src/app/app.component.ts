import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import 'firebase/auth';
import firebase from 'firebase/app'
const { auth } = firebase

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'buy-and-sell';

  constructor(
    public auth: AngularFireAuth
  ) {}

  ngOnInit() {
    console.log(`ngOnInit  - data is ${this.title}`);
  }

  ngOnChanges() {
    console.log(`ngOnChanges - data is ${this.title}`);  
  }

  signInClicked(): void{
    this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  signOutClicked(): void {
    this.auth.signOut();
  }
}
