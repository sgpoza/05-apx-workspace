import { Component, signal } from '@angular/core';

import { ApxSideMenuComponent, TitleColor } from 'sgp-apx-side-menu';

@Component({
  selector: 'app-root',
  imports: [ApxSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'apx-testbed-app';

  isAuthenticated = signal(true);

  TitleColor = TitleColor;
}
