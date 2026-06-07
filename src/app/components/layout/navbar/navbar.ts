import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { AppButtonComponent } from '../../buttons/app-button/app-button.component';

import { NavItem } from '../../../interfaces/nav-item.interface';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, AppButtonComponent],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})


export class Navbar {

  navigationItems: NavItem[] = [
    {
      label: 'Cómo pensamos',
      route: '/about'
    },
    {
      label: 'Proyectos',
      route: '/projects'
    },
    {
      label: 'Contacto',
      route: '/contact'
    },
    {
      label: 'Blog',
      route: '/blog'
    },
    {
      label: 'Empleos',
      route: '/careers'
    }
  ];

  onSearchClick(): void {
    console.log('Buscar');
  }

}
