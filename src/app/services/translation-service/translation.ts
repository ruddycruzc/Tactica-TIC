import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  currentLanguage = signal<string>('es');

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
        HERO: {
          TITLE_LINE_1: 'Tecnología que',
          TITLE_HIGHLIGHT: 'evoluciona',
          TITLE_LINE_2: 'contigo',
          DESCRIPTION: 'Combinamos tecnología, automatización y estrategia digital para ayudarte a optimizar procesos, conectar herramientas y hacer crecer tu negocio de forma inteligente y progresiva.',
          ABOUT_BUTTON: 'Conócenos',
          VISION_BUTTON: 'Nuestra visión'
        },

        INFO: {
          TAG: 'Innovación tecnológica',
          TITLE: 'Crecimiento digital',
          DESCRIPTION: 'Ayudamos a las empresas a optimizar procesos, integrar herramientas y acelerar su transformación digital mediante soluciones tecnológicas adaptadas a cada necesidad.',
          BUTTON: 'Conócenos',
          IMAGE_ALT: 'Tecnología digital'
        },
       "VIDEO": {
          "PLAY_VIDEO": "Reproducir vídeo",
          "CEO_NAME": "Isabel Santos",
          "CEO_ROLE": "CEO",
          "TITLE": "Liderando el cambio digital",
          "DESCRIPTION": "Nuestra misión es guiar a las empresas en su proceso de automatización y evolución tecnológica. Creemos en una tecnología cercana, eficiente y diseñada a la medida de los retos reales de cada negocio.",
          "LEAD": "Descubre a través de nuestra CEO cómo impulsamos la estrategia digital de forma inteligente y progresiva."
}
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
        HERO: {
          TITLE_LINE_1: 'Technology that',
          TITLE_HIGHLIGHT: 'evolves',
          TITLE_LINE_2: 'with you',
          DESCRIPTION: 'We combine technology, automation and digital strategy to help you optimize processes, connect tools and grow your business intelligently and progressively.',
          ABOUT_BUTTON: 'Get to know us',
          VISION_BUTTON: 'Our vision'
        },

        INFO: {
          TAG: 'Technological innovation',
          TITLE: 'Digital growth',
          DESCRIPTION: 'We help companies optimize processes, integrate tools and accelerate their digital transformation through technology solutions tailored to their needs.',
          BUTTON: 'Get to know us',
          IMAGE_ALT: 'Digital technology'
        },
               "VIDEO": {
             "PLAY_VIDEO": "Play video",
             "CEO_NAME": "Isabel Santos",
             "CEO_ROLE": "CEO",
             "TITLE": "Leading digital transformation",
             "DESCRIPTION": "Our mission is to guide companies through their automation and technological evolution journey. We believe in technology that is accessible, efficient, and tailored to the real challenges of every business.",
             "LEAD": "Discover through our CEO how we drive digital strategy in an intelligent and progressive way."
              }
      }
    });

    this.translate.addLangs(['es', 'en']);

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