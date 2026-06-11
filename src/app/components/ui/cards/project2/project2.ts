import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AppButtonComponent } from '../../buttons/app-button/app-button.component';

@Component({
  selector: 'app-project2',
  standalone: true,
  imports: [AppButtonComponent, RouterLink],
  templateUrl: './project2.html',
  styleUrl: './project2.css'
})
export class Project2 {
  @Input({ required: true }) image = '';
  @Input({ required: true }) imageAlt = '';
  @Input({ required: true }) title = '';
  @Input({ required: true }) description = '';
}
