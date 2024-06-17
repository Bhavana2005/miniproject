import { Component } from '@angular/core';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent {
  showForm: boolean = false;

  constructor() { }

  navigateToForm() {
    this.showForm = true;
  }
}
