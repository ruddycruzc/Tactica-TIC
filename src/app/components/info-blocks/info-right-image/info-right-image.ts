import { Component } from '@angular/core';
import { AppButtonComponent } from '../../buttons/app-button/app-button.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-info-right-image',
  standalone: true,
  imports: [AppButtonComponent,TranslateModule],
  templateUrl: './info-right-image.html',
  styleUrl: './info-right-image.css',
})
export class InfoRightImage {}
