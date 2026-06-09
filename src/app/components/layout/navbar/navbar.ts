import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';


import { NavItem } from '../../../interfaces/nav-item.interface';
import { TranslationService } from '../../../services/translation-service/translation';
import { AppButtonComponent } from '../../buttons/app-button/app-button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    TranslateModule,
    AppButtonComponent
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  constructor(
    private translationService: TranslationService
  ) {}

  menuOpen = false;

  navigationItems: NavItem[] = [
    {
      label: 'NAV.ABOUT',
      route: '/about'
    },
    {
      label: 'NAV.PROJECTS',
      route: '/projects'
    },
    {
      label: 'NAV.CONTACT',
      route: '/contact'
    },
    {
      label: 'NAV.BLOG',
      route: '/blog'
    },
    {
      label: 'NAV.CAREERS',
      route: '/careers'
    }
  ];

  get currentLanguage(): string {
    return this.translationService.currentLanguage();
  }

  toggleLanguage(): void {
    this.translationService.toggleLanguage();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  onSearchClick(): void {
    console.log('Buscar');
  }
  closeMenu(): void {
  this.menuOpen = false;
}
}