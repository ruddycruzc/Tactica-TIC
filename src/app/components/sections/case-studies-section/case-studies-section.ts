import { Component } from '@angular/core';
import { AppButtonComponent } from '../../buttons/app-button/app-button.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-case-studies-section',
   standalone: true,
  imports: [AppButtonComponent,TranslateModule],
  templateUrl: './case-studies-section.html',
  styleUrl: './case-studies-section.css',
})
export class CaseStudiesSection {

}
