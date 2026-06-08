import { Component } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { AboutContent } from '../../../interfaces/about-section.interface';
import { MissionVisionCard } from '../../../interfaces/mission-vision-card.interface';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-section.html',
  styleUrl: './about-section.css'
})
export class AboutSection {

  aboutContent: AboutContent = {
    historyTitle: 'ABOUT.WHO.HISTORY_TITLE',
    paragraphs: [
      'ABOUT.WHO.PARAGRAPH_1',
      'ABOUT.WHO.PARAGRAPH_2'
    ]
  };

  missionVisionCards: MissionVisionCard[] = [
    {
      title: 'ABOUT.MISSION_VISION.MISSION_TITLE',
      description: 'ABOUT.MISSION_VISION.MISSION_TEXT'
    },
    {
      title: 'ABOUT.MISSION_VISION.VISION_TITLE',
      description: 'ABOUT.MISSION_VISION.VISION_TEXT'
    }
  ];

}