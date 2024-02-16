import { Component } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { HSStaticMethods } from 'preline';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'authentication';
  constructor(private router: Router) {
  }
  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          HSStaticMethods.autoInit();
        }, 100);
      }
    });
  }
}
