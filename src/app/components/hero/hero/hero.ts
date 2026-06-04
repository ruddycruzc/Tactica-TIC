import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
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
