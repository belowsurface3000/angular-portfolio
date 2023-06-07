import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent {

  showNavigation = false;

  triggerNavigation() {
    console.log("click")
  }

  toggleNavigation() {
    this.showNavigation = !this.showNavigation;
  }
}
