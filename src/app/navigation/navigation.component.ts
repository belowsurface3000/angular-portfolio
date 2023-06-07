import { Component, HostListener, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent {

  navigation = false;
  navigationHidden = true;
  scrollUp: boolean;
  currentScrollPos: number;
  prevScrollPos: number;

  constructor(private renderer: Renderer2) {
    this.scrollUp = false;
    this.navigationHidden = false;
    this.currentScrollPos = 0;
    this.prevScrollPos = 0;
  }

  ngOnInit() {
    console.log(this.navigationHidden)
    // Check the initial window size
    if (window.innerWidth <= 1500) {
      this.navigationHidden = true;
    }

    // Call the scroll event handler
    this.onScroll();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.currentScrollPos = window.pageYOffset;
    
    if (this.currentScrollPos < window.innerHeight / 2) {
      this.scrollUp = true;
    } else if (this.prevScrollPos > this.currentScrollPos) {
      this.scrollUp = true;
    } else {
      this.scrollUp = false;
    }

    this.prevScrollPos = this.currentScrollPos;
  }

  @HostListener('window:resize', [])
  onResize(): void {
    if (window.innerWidth <= 1500) {
      this.navigationHidden = true;
    } else {
      this.navigationHidden = false;
    }
  }

  triggerNavigation() {
    this.navigation = !this.navigation;
  }

  toggleNavigation() {
    this.navigation = !this.navigation;
  }
}
