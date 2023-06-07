import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent {

  navigation = false;
  navigationHidden = true;

  triggerNavigation() {
    this.navigation = !this.navigation;
  }

  toggleNavigation() {
    this.navigation = !this.navigation;
  }
}
