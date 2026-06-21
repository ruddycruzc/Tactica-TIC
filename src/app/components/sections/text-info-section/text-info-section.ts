import {
  Component,
  OnDestroy,
  inject
} from '@angular/core';

import {
  TypewriterText,
  TypewriterTextSegment
} from '../../ui/text/typewriter-text/typewriter-text';

import {
  TranslateModule,
  TranslateService
} from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-text-info-section',
  standalone: true,
  imports: [
    TypewriterText,
    TranslateModule
  ],
  templateUrl: './text-info-section.html',
  styleUrl: './text-info-section.css',
})
export class TextInfoSection implements OnDestroy {

  private readonly translate = inject(TranslateService);
  private readonly languageSubscription: Subscription;

  statement = '';

  statementSegments: TypewriterTextSegment[] = [];

  constructor() {
    this.setStatementContent();

    this.languageSubscription =
      this.translate.onLangChange.subscribe(() => {
        this.setStatementContent();
      });
  }

  ngOnDestroy(): void {
    this.languageSubscription.unsubscribe();
  }

  private setStatementContent(): void {
    this.statement =
      this.translate.instant(
        'HOME.TEXT_INFO.STATEMENT'
      );

    this.statementSegments = [
      {
        text: this.translate.instant(
          'HOME.TEXT_INFO.SEGMENTS.PART_1'
        ),
        tone: 'muted'
      },
      {
        text: this.translate.instant(
          'HOME.TEXT_INFO.SEGMENTS.PART_2'
        ),
        tone: 'strong'
      },
      {
        text: this.translate.instant(
          'HOME.TEXT_INFO.SEGMENTS.PART_3'
        ),
        tone: 'muted'
      },
      {
        text: this.translate.instant(
          'HOME.TEXT_INFO.SEGMENTS.PART_4'
        ),
        tone: 'strong'
      },
      {
        text: this.translate.instant(
          'HOME.TEXT_INFO.SEGMENTS.PART_5'
        ),
        tone: 'muted'
      }
    ];
  }
}
