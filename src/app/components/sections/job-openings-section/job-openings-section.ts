import { Component } from '@angular/core';
import { NgFor } from '@angular/common'; 

@Component({
  selector: 'app-job-openings-section',
  standalone: true,
  imports: [NgFor], 
  templateUrl: './job-openings-section.html',
  styleUrl: './job-openings-section.css'
})
export class JobOpeningsSection {
  readonly jobCards = [
    {
      title: 'Táctica TIC, tecnología innovadora para la transformación digital de empresas',
      description: 'Gracias a la inteligencia artificial, la visión por computador y la programación, Táctica TIC ha logrado optimizar los procesos y aumentar la eficiencia de las empresas.'
    },
    {
      title: 'La empresa asturiana TÁCTICA TIC, premio ANCES Open Innova 2021',
      description: 'La empresa asturiana Táctica TIC ha sido una de las galardonadas en el programa nacional Ances Open Innovation, que ha fallado esta mañana.'
    },
    {
      title: 'TÁCTICA TIC, una gran casona para la economía verde en Gijón Oeste',
      description: 'La empresa Táctica TIC, ubicada en la Quinta desde su apertura, es el claro ejemplo de la importancia que tiene para los emprendedores disponer de espacios de innovación.'
    }
  ];
}
