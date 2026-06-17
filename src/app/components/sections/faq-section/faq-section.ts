import { Component } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { FaqItem } from '../../../interfaces/data/faq-item.interface';

@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [
    TranslateModule
  ],
  templateUrl: './faq-section.html',
  styleUrl: './faq-section.css'
})
export class FaqSection {

  readonly faqContent = {
    title: 'HOME.FAQ.TITLE',
    titleHighlight: 'HOME.FAQ.TITLE_HIGHLIGHT',
    subtitle: 'HOME.FAQ.SUBTITLE'
  };

  readonly faqItems: FaqItem[] = [ // Configuración del acordeón FAQ.
// Las preguntas y respuestas se gestionan desde los archivos de traducción.
    {  question: 'HOME.FAQ.QUESTION_1',
      answer: 'HOME.FAQ.ANSWER_1',
      isOpen: true
    },
    {
      question: 'HOME.FAQ.QUESTION_2',
      answer: 'HOME.FAQ.ANSWER_2'
    },
    {
      question: 'HOME.FAQ.QUESTION_3',
      answer: 'HOME.FAQ.ANSWER_3'
    },
    {
      question: 'HOME.FAQ.QUESTION_4',
      answer: 'HOME.FAQ.ANSWER_4'
    }
  ];

}