import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { IconButton } from '../../buttons/iconbutton/iconbutton';

import { NavItem } from '../../../interfaces/nav-item.interface';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    IconButton,
    TranslateModule
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  currentLanguage = 'es';

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

constructor(
  private translate: TranslateService
) {
this.translate.setTranslation('en', {
  NAV: {
    ABOUT: 'How We Think',
    PROJECTS: 'Projects',
    CONTACT: 'Contact',
    BLOG: 'Blog',
    CAREERS: 'Careers'
  },

  HOME: {
    TITLE_LINE_1: 'Technology that',
    TITLE_HIGHLIGHT: 'evolves',
    TITLE_LINE_2: 'with you',
    DESCRIPTION: 'We combine technology, automation and digital strategy to help you optimize processes, connect tools and grow your business intelligently and progressively.',
    ABOUT_BUTTON: 'Get to know us',
    VISION_BUTTON: 'Our vision'
  }
});

this.translate.setTranslation('es', {
  NAV: {
    ABOUT: 'Cómo pensamos',
    PROJECTS: 'Proyectos',
    CONTACT: 'Contacto',
    BLOG: 'Blog',
    CAREERS: 'Empleos'
  },

  HOME: {
    TITLE_LINE_1: 'Tecnología que',
    TITLE_HIGHLIGHT: 'evoluciona',
    TITLE_LINE_2: 'contigo',
    DESCRIPTION: 'Combinamos tecnología, automatización y estrategia digital para ayudarte a optimizar procesos, conectar herramientas y hacer crecer tu negocio de forma inteligente y progresiva.',
    ABOUT_BUTTON: 'Conócenos',
    VISION_BUTTON: 'Nuestra visión'
  }
});

  this.translate.addLangs(['es', 'en']);

  this.translate.use('es');
}

  toggleLanguage(): void {

    this.currentLanguage =
      this.currentLanguage === 'es'
        ? 'en'
        : 'es';

    this.translate.use(this.currentLanguage);

    localStorage.setItem(
      'language',
      this.currentLanguage
    );
  }

  onSearchClick(): void {
    console.log('Buscar');
  }
}