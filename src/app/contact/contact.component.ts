import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../environments/environment';

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

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm(environment.EMAIL_SERVICE, environment.EMAIL_TEMPLATE, e.target as HTMLFormElement, environment.EMAIL_USER)
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  updateUserInput(e: Event) {
    const target = e.target as HTMLInputElement;
    if (target.value != "okay") return;
    this.showContactForm = true;
  }
}