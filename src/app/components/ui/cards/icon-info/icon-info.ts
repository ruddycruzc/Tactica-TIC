import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-info',
  standalone: true,
  imports: [],
  templateUrl: './icon-info.html',
  styleUrl: './icon-info.css',
})
export class IconInfo {
  @Input() icon = '';
  @Input() title = '';
  @Input() description = '';
}
