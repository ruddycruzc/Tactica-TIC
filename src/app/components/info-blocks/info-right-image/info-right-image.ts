import { Component } from '@angular/core';
import { AppButtonComponent } from '../../../shared/components/buttons/app-button/app-button.component';

@Component({
  selector: 'app-info-right-image',
  standalone: true,
  imports: [AppButtonComponent],
  templateUrl: './info-right-image.html',
  styleUrl: './info-right-image.css',
})
export class InfoRightImage {}
