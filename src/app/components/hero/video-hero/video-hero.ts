import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { VideoContent } from '../../../interfaces/video-content.interface';

@Component({
  selector: 'app-video-hero',
   standalone: true,
  imports: [TranslateModule],
  templateUrl: './video-hero.html',
  styleUrl: './video-hero.css',
})
export class VideoHero {

readonly videoContent: VideoContent = {
  playVideo: 'HOME.VIDEO.PLAY_VIDEO',
  ceoName: 'HOME.VIDEO.CEO_NAME',
  ceoRole: 'HOME.VIDEO.CEO_ROLE',
  title: 'HOME.VIDEO.TITLE',
  description: 'HOME.VIDEO.DESCRIPTION',
  lead: 'HOME.VIDEO.LEAD'
};
}
