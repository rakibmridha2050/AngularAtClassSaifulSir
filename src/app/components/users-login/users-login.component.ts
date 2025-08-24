import { Component } from '@angular/core';

@Component({
  selector: 'app-users-login',
  templateUrl: './users-login.component.html',
  styleUrls: ['./users-login.component.scss']
})
export class UsersLoginComponent {

  formData: any = {
    name: '',
    email: '',
    password: '',
    age: null,
    dob: '',
    subscribe: false,
    gender: '',
    country: '',
    beo: '',
    rating: 5,
    file: null

  };

  countries: string[] = ['Bangladesh', 'India', 'USA', 'UK', 'Canada'];

  onSubmit() {
    console.log('From Submitted: ', this.formData);
    alert('Check console for logged data!');

  }


}
