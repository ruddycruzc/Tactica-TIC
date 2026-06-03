import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [],
  templateUrl: './iconbutton.html',
  styleUrl: './iconbutton.css'
})
export class IconButton {

  @Input() icon = '';

  @Input() ariaLabel = '';

  @Output() clicked = new EventEmitter<void>();

  onClick(): void {
    this.clicked.emit();
  }
}
