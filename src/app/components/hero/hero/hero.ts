import { Component } from '@angular/core';
import { AppButtonComponent } from '../../buttons/app-button/app-button.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [AppButtonComponent],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  readonly wavePaths = Array.from({ length: 38 }, (_, index) => {
    const y = 58 + index * 5.6;
    const lift = index - 18.5;

    return `M -70 ${y}
      C 90 ${y - 96 - lift * 1.2}, 220 ${y - 92}, 360 ${y - 18}
      C 520 ${y + 66 + lift * 0.9}, 610 ${y + 74}, 760 ${y + 8}
      C 930 ${y - 68 - lift * 0.8}, 1050 ${y - 62}, 1280 ${y + 10}`;
  });

  cursorX = 50;
  cursorY = 50;
  isPointerActive = false;

  onPointerMove(event: PointerEvent): void {
    const bounds = (event.currentTarget as HTMLElement).getBoundingClientRect();

    this.cursorX = this.toPercent(event.clientX - bounds.left, bounds.width);
    this.cursorY = this.toPercent(event.clientY - bounds.top, bounds.height);
    this.isPointerActive = true;
  }

  onPointerLeave(): void {
    this.cursorX = 50;
    this.cursorY = 50;
    this.isPointerActive = false;
  }

  private toPercent(value: number, total: number): number {
    return Math.min(100, Math.max(0, (value / total) * 100));
  }
}
