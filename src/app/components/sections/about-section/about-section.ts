import { Component } from '@angular/core';
import { NgFor } from '@angular/common'; 
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [TranslateModule, NgFor],
  templateUrl: './about-section.html',
  styleUrl: './about-section.css'
})
export class AboutSectionComponent {
  readonly mvCards = [
    {
      title: 'Misión',
      text: 'Nos negamos a ver el código como algo frío. Cada proyecto social que asumimos busca resolver retos reales y humanos.'
    },
    {
      title: 'Visión',
      text: 'Tratamos cada línea de desarrollo con la responsabilidad moral que merece el impacto comunitario. Garantizamos un software transparente, accesible y con un fin ético claro, celebrando 10 años de tecnología transparente.'
    }
  ];
}