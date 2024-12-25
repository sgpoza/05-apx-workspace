import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export enum TitleColor {
  red = 'text-red-500',
  green = 'text-green-500',
  blue = 'text-blue-500',
  purple = 'text-purple-500'
}

@Component({
  selector: 'lib-sgp-apx-side-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sgp-apx-side-menu.component.html',
  styles: ``
})
export class ApxSideMenuComponent {
  isAuthenticated = input(false);

  titleColor = input<TitleColor>(TitleColor.purple);

  signIn = output();
  signOut = output();
}
