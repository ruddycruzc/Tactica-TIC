import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { AppButtonComponent } from '../../components/ui/buttons/app-button/app-button.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    AppButtonComponent,
    RouterLink,
    TranslateModule
  ],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound {}