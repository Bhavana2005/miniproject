import { Component } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    fullName: '',
    email: '',
    phoneNumber: '',
    gender: '',
    age: null,
    weight: null,
    selectedPackage: ''
  };

  constructor(private userService: UserService) { }

  onSubmit(): void {
    this.userService.registerUser(this.user).subscribe(
      response => {
        alert('You have successfully registered!');
        window.location.href = '/success';
      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }
}
  