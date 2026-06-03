import { Component } from '@angular/core';
import { Hero } from "../../hero/hero/hero";

@Component({
  selector: 'app-body',
  imports: [Hero],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {

}
