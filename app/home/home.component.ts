import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  model: { [key: string]: string } = {
    username: '',
    password: ''
  };
  submitted = false;
  submitError = false;
  loginSuccess = false;

  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    this.submitted = true;
    this.submitError = false;
    this.loginSuccess = false;

    if (form.valid) {
      // Perform login logic
      this.loginSuccess = true;
      setTimeout(() => {
        this.router.navigate(['/packages']);
      }, 2000);
    } else {
      this.submitError = true;
    }
  }
}