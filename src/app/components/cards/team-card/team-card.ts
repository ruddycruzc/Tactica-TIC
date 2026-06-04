import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-card',
  standalone: true,
  templateUrl: './team-card.html',
  styleUrls: ['./team-card.css'],
})
export class TeamCard {
  @Input() image: string = '/assets/images/cards/team1.png';
  @Input() title: string = '¿Listo para transformar la industria?';
  @Input() description: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  @Input() primaryLabel: string = 'Ver posiciones abiertas';
  @Input() primaryHref: string = '#';
  @Input() secondaryLabel: string = 'Conócenos';
  @Input() secondaryHref: string = '#';
}
