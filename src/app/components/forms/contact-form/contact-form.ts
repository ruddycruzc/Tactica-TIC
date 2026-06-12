import { Component } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { AppButtonComponent } from '../../ui/buttons/app-button/app-button.component';

import { ContactInfoItem } from '../../../interfaces/contact-info-item.interface.ts';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    AppButtonComponent,
    TranslateModule
  ],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css'
})
export class ContactForm {

  readonly contactContent = {
    titleLine1: 'CONTACT_FORM.TITLE_LINE_1',
    titleHighlight: 'CONTACT_FORM.TITLE_HIGHLIGHT',
    description: 'CONTACT_FORM.DESCRIPTION',
    submit: 'CONTACT_FORM.SUBMIT'
  };

  readonly contactInfo: ContactInfoItem[] = [
    {
      icon: 'email',
      label: 'CONTACT_FORM.EMAIL_LABEL',
      value: 'hello@tacticatic.com'
    },
    {
      icon: 'location',
      label: 'CONTACT_FORM.OFFICE_LABEL',
      value: 'CONTACT_FORM.OFFICE_ADDRESS'
    }
  ];

}