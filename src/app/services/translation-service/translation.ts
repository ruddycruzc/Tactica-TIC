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
       VIDEO: {
          PLAY_VIDEO: "Reproducir vídeo",
          CEO_NAME: "Isabel Santos",
          CEO_ROLE: "CEO",
          TITLE: "Liderando el cambio digital",
          DESCRIPTION: "Nuestra misión es guiar a las empresas en su proceso de automatización y evolución tecnológica. Creemos en una tecnología cercana, eficiente y diseñada a la medida de los retos reales de cada negocio.",
          LEAD: "Descubre a través de nuestra CEO cómo impulsamos la estrategia digital de forma inteligente y progresiva."
        },
        CASE_STUDIES: {
          TITLE: "Nuestros proyectos",
          SUBTITLE: "Descubre cómo resolvemos desafíos complejos de ingeniería y transformamos ideas en soluciones tecnológicas reales.",
          VIEW_ALL: "Ver todos los proyectos",
          TAG: "I+D+i",
          PROJECT_1_ALT: "Proyecto MINIASSIST",
          PROJECT_2_ALT: "Proyecto EPISOT"  
        },
          TEAM: {
          TITLE: "Nuestro equipo",
          SUBTITLE: "Conoce a las personas que impulsan nuestros proyectos y convierten los desafíos tecnológicos en soluciones reales.",
          PREVIOUS: "Anterior",
          NEXT: "Siguiente",
          CAROUSEL_CONTROLS: "Controles del carrusel"
          },
          LOGOS: {
            TITLE: "Empresas que confían en nosotros",
            PARTNERS_LABEL: "Empresas colaboradoras"
          }

      },
      FAQ: {
                TITLE: "Preguntas",
                TITLE_HIGHLIGHT: "Frecuentes",
                SUBTITLE: "Resolvemos tus dudas sobre cómo impulsamos la transformación digital de tu negocio desde Gijón.",

                QUESTION_1: "¿Qué tipo de servicios ofrece TÁCTICA TIC?",
                ANSWER_1: "Nos especializamos en el desarrollo de software a medida, automatización de procesos industriales y empresariales, consultoría tecnológica y diseño de estrategias digitales globales para ayudar a las empresas a evolucionar y ser más eficientes.",

                QUESTION_2: "¿Trabajáis solo con empresas de Asturias o de toda España?",
                ANSWER_2: "Nuestras oficinas centrales están en Gijón (Asturias), lo que nos permite dar un soporte muy cercano al tejido empresarial local. Sin embargo, gracias a nuestra metodología de trabajo en remoto, desarrollamos e implementamos soluciones tecnológicas para clientes de toda España.",

                QUESTION_3: "¿Cómo es el proceso de trabajo desde que contacto con vosotros?",
                ANSWER_3: "Comenzamos con una fase de consultoría y análisis para entender a fondo tus necesidades y cuellos de botella. Tras diseñar una estrategia milimétrica, pasamos al desarrollo del software de forma ágil y transparente, culminando con la implantación, formación de tu equipo y soporte continuo.",

                QUESTION_4: "¿Vuestras soluciones tecnológicas se integran con herramientas que ya usamos?",
                ANSWER_4: "¡Por supuesto! Uno de nuestros pilares es conectar herramientas y optimizar procesos. Diseñamos software robusto capaz de integrarse mediante APIs con tus sistemas actuales (ERPs, CRMs o maquinaria industrial) para que la transición sea fluida e inteligente."
},
      CONTACT_FORM: {
                TITLE_LINE_1: "Impulsa tu",
                TITLE_HIGHLIGHT: "transformación digital",

                DESCRIPTION: "Cuéntanos tu proyecto y te ayudaremos a encontrar la mejor solución tecnológica para optimizar procesos, automatizar tareas y acelerar el crecimiento de tu empresa.",

                EMAIL_LABEL: "Email:",
                OFFICE_LABEL: "Oficinas:",

                OFFICE_ADDRESS: "Parque Tecnológico, Edificio 4, Gijón, Asturias, España",

                NAME_PLACEHOLDER: "Nombre y apellidos",
                COMPANY_PLACEHOLDER: "Empresa",
                EMAIL_PLACEHOLDER: "Email",
                PHONE_PLACEHOLDER: "Número",
                MESSAGE_PLACEHOLDER: "¿Cómo podemos ayudarte?",

                SUBMIT: "Solicitar ayuda"
              },
      FOOTER: {
          TAGLINE: "Industrial Intelligence & Digital Transformation.",
          COPYRIGHT: "© 2024 TÁCTICA TIC. Industrial Intelligence & Digital Transformation.",

          TECHNOLOGY: "TECNOLOGÍA",
          COMPANY: "EMPRESA",
          LEGAL: "LEGAL"
},
FOOTER_LINKS: {
  VISION: 'Visión',
  AI: 'Inteligencia Artificial',
  IOT: 'Internet de las Cosas',
  AUTOMATION: 'Automatización',
  DIGITAL_TWINS: 'Gemelos Digitales',

  WHO_WE_ARE: 'Quiénes somos',
  SUCCESS_STORIES: 'Casos de éxito',
  RESEARCH: 'Investigación',
  JOBS: 'Empleo',

  PRIVACY_POLICY: 'Política de privacidad'
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
        VIDEO: {
          PLAY_VIDEO: "Play video",
          CEO_NAME: "Isabel Santos",
          CEO_ROLE: "CEO",
          TITLE: "Leading digital transformation",
          DESCRIPTION: "Our mission is to guide companies through their automation and technological evolution journey. We believe in technology that is accessible, efficient, and tailored to the real challenges of every business.",
          LEAD: "Discover through our CEO how we drive digital strategy in an intelligent and progressive way."
        },
        CASE_STUDIES: {
            TITLE: "Our projects",
            SUBTITLE: "Discover how we solve complex engineering challenges and transform ideas into real technological solutions.",
            VIEW_ALL: "View all projects",
            TAG: "I+D+i",
            PROJECT_1_ALT: "MINIASSIST project",
            PROJECT_2_ALT: "EPISOT project"
        },
        TEAM: {
           TITLE: "Our team",
           SUBTITLE: "Meet the people who drive our projects and turn technological challenges into real solutions.",
           PREVIOUS: "Previous",
           NEXT: "Next",
           CAROUSEL_CONTROLS: "Carousel controls"
         },
          LOGOS: {
            TITLE: "Companies that trust us",
            PARTNERS_LABEL: "Partner companies"
         }
      },
      FAQ: {
        TITLE: "Frequently",
        TITLE_HIGHLIGHT: "Asked Questions",
        SUBTITLE: "We answer your questions about how we drive your company's digital transformation from Gijón.",

        QUESTION_1: "What services does TÁCTICA TIC offer?",
        ANSWER_1: "We specialize in custom software development, industrial and business process automation, technology consulting, and digital strategy design to help companies evolve and become more efficient.",

        QUESTION_2: "Do you only work with companies in Asturias or throughout Spain?",
        ANSWER_2: "Our headquarters are located in Gijón (Asturias), allowing us to provide close support to the local business community. However, thanks to our remote working methodology, we develop and implement technological solutions for clients throughout Spain.",

        QUESTION_3: "What is the work process once I contact you?",
        ANSWER_3: "We begin with a consulting and analysis phase to thoroughly understand your needs and bottlenecks. After designing a tailored strategy, we move on to agile and transparent software development, followed by implementation, team training, and ongoing support.",

        QUESTION_4: "Can your technology solutions integrate with tools we already use?",
        ANSWER_4: "Absolutely! One of our core principles is connecting tools and optimizing processes. We design robust software capable of integrating with your existing systems (ERPs, CRMs, or industrial machinery) through APIs to ensure a smooth and intelligent transition."
      },
      CONTACT_FORM: {
          TITLE_LINE_1: "Boost your",
          TITLE_HIGHLIGHT: "digital transformation",

          DESCRIPTION: "Tell us about your project and we will help you find the best technological solution to optimize processes, automate tasks, and accelerate your company's growth.",

          EMAIL_LABEL: "Email:",
          OFFICE_LABEL: "Offices:",

          OFFICE_ADDRESS: "Technology Park, Building 4, Gijón, Asturias, Spain",

          NAME_PLACEHOLDER: "Full name",
          COMPANY_PLACEHOLDER: "Company",
          EMAIL_PLACEHOLDER: "Email",
          PHONE_PLACEHOLDER: "Phone number",
          MESSAGE_PLACEHOLDER: "How can we help you?",

          SUBMIT: "Request assistance"
},
    FOOTER: {
          TAGLINE: "Industrial Intelligence & Digital Transformation.",
          COPYRIGHT: "© 2024 TÁCTICA TIC. Industrial Intelligence & Digital Transformation.",

          TECHNOLOGY: "TECHNOLOGY",
          COMPANY: "COMPANY",
          LEGAL: "LEGAL"
},
FOOTER_LINKS: {
  VISION: 'Vision',
  AI: 'Artificial Intelligence',
  IOT: 'Internet of Things',
  AUTOMATION: 'Automation',
  DIGITAL_TWINS: 'Digital Twins',

  WHO_WE_ARE: 'Who we are',
  SUCCESS_STORIES: 'Success Stories',
  RESEARCH: 'Research',
  JOBS: 'Jobs',

  PRIVACY_POLICY: 'Privacy Policy'
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