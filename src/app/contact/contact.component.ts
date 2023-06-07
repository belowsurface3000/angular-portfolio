import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent {
  userInput: string;
  riddle: string;
  showContactForm: boolean;

  constructor() {
    this.userInput = "";
    this.riddle = "okay";
    this.showContactForm = false;
  }

  updateUserInput(e: Event) {
    const target = e.target as HTMLInputElement;
    if (target.value != "okay") return;
    this.showContactForm = true;
  }

}
