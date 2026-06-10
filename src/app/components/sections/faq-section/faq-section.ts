import { Component } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { FaqItem } from '../../../interfaces/faq-item.interface';

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

  readonly faqItems: FaqItem[] = [  //para añadir cualquier pregunta mas hay que añadirla en la ruta: src/app/translations/pages/home/home.en.ts ó home.es.ts recordando que tiene que tener su respectiva traduccion 
    {
      question: 'HOME.FAQ.QUESTION_1',
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