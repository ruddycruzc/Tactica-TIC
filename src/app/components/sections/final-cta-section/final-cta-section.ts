import { Component } from '@angular/core';

import { AppButtonComponent } from '../../ui/buttons/app-button/app-button.component';

@Component({
  selector: 'app-final-cta-section',
  standalone: true,
  imports: [AppButtonComponent],
  templateUrl: './final-cta-section.html',
  styleUrl: './final-cta-section.css',
})
export class FinalCtaSection {}
