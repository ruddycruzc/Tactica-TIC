import { Component } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { AppButtonComponent } from '../../ui/buttons/app-button/app-button.component';

import { CaseStudy } from '../../../interfaces/case-study.interface';
import { CaseStudiesContent } from '../../../interfaces/case-studies-content.interface';

@Component({
  selector: 'app-case-studies-section',
  standalone: true,
  imports: [
    AppButtonComponent,
    TranslateModule
  ],
  templateUrl: './case-studies-section.html',
  styleUrl: './case-studies-section.css'
})
export class CaseStudiesSection {

  readonly caseStudiesContent: CaseStudiesContent = {
    title: 'HOME.CASE_STUDIES.TITLE',
    subtitle: 'HOME.CASE_STUDIES.SUBTITLE',
    button: 'HOME.CASE_STUDIES.VIEW_ALL'
  };

  readonly projects: CaseStudy[] = [
    {
      tag: 'HOME.CASE_STUDIES.TAG',
      title: 'HOME.CASE_STUDIES.PROJECT_1_ALT',
      image: 'assets/images/case-image/imagen2.png',
      cardClass: 'card-narrow'
    },
    {
      tag: 'HOME.CASE_STUDIES.TAG',
      title: 'HOME.CASE_STUDIES.PROJECT_2_ALT',
      image: 'assets/images/case-image/proyecto2.png',
      cardClass: 'card-wide'
    }
  ];

}