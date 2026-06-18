import { Component, Input } from '@angular/core';
import { AppButtonComponent } from '../../buttons/app-button/app-button.component';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-project-card',
  imports: [AppButtonComponent, TranslateModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  @Input({ required: true }) image = '';
  @Input() imageAlt = '';
  @Input({ required: true }) title = '';
  @Input({ required: true }) description = '';
  @Input() buttonLabel = '';
  @Input() buttonRouterLink: string | unknown[] | null = null;
  @Input() buttonHref: string | null = null;
  @Input() buttonTarget: string | null = null;
}
