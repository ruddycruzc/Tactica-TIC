import { Component } from '@angular/core';
import { AppButtonComponent } from '../../buttons/app-button/app-button.component';

@Component({
  selector: 'app-minimal-hero',
  imports: [AppButtonComponent],
  templateUrl: './minimal-hero.html',
  styleUrl: './minimal-hero.css',
})
export class MinimalHero {

}
