import { Component, inject } from '@angular/core';

import {
  TypewriterText,
  TypewriterTextSegment
} from '../../ui/text/typewriter-text/typewriter-text';

import {
  TranslateModule,
  TranslateService
} from '@ngx-translate/core';

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
export class TextInfoSection {

  private readonly translate = inject(TranslateService);

  readonly statement =
    this.translate.instant(
      'HOME.TEXT_INFO.STATEMENT'
    );

  readonly statementSegments: TypewriterTextSegment[] = [
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