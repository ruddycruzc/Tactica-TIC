import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  currentLanguage = signal('es');

  constructor(
    private translate: TranslateService
  ) {

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

    const savedLanguage =
      localStorage.getItem('language') || 'es';

    this.changeLanguage(savedLanguage);
  }

  changeLanguage(language: string): void {

    this.currentLanguage.set(language);

    this.translate.use(language);

    localStorage.setItem(
      'language',
      language
    );
  }

  toggleLanguage(): void {

    const nextLanguage =
      this.currentLanguage() === 'es'
        ? 'en'
        : 'es';

    this.changeLanguage(nextLanguage);
  }
}