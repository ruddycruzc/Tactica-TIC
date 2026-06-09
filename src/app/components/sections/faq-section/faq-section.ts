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
    title: 'FAQ.TITLE',
    titleHighlight: 'FAQ.TITLE_HIGHLIGHT',
    subtitle: 'FAQ.SUBTITLE'
  };

  readonly faqItems: FaqItem[] = [
    {
      question: 'FAQ.QUESTION_1',
      answer: 'FAQ.ANSWER_1',
      isOpen: true
    },
    {
      question: 'FAQ.QUESTION_2',
      answer: 'FAQ.ANSWER_2'
    },
    {
      question: 'FAQ.QUESTION_3',
      answer: 'FAQ.ANSWER_3'
    },
    {
      question: 'FAQ.QUESTION_4',
      answer: 'FAQ.ANSWER_4'
    }
  ];

}