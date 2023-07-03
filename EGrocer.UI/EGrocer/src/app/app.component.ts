import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hideHeaderFooter = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.hideHeaderFooter = this.isLoginOrRegistrationPage(event.url);
      }
      else
      {
        this.hideHeaderFooter = true;
      }
    });
  }

  isLoginOrRegistrationPage(url: string): boolean {
    return url === '/auth/login' || url === '/auth/registration';
  }
}
