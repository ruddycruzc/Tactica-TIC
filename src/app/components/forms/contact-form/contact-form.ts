import { Component } from '@angular/core';
import { AppButtonComponent } from '../../buttons/app-button/app-button.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-form',
   standalone: true,
  imports: [AppButtonComponent,TranslateModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm {

}
