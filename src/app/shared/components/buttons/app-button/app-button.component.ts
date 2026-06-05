import { booleanAttribute, Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

export type AppButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type AppButtonType = 'button' | 'submit' | 'reset';
export type AppButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './app-button.component.html',
  styleUrl: './app-button.component.scss',
})
export class AppButtonComponent {
  @Input() variant: AppButtonVariant = 'primary';
  @Input() type: AppButtonType = 'button';
  @Input({ transform: booleanAttribute }) disabled = false;
  @Input({ transform: booleanAttribute }) fullWidth = false;
  @Input() size: AppButtonSize = 'md';
  @Input({ transform: booleanAttribute }) iconOnly = false;
  @Input() href: string | null = null;
  @Input() routerLink: string | unknown[] | null = null;
  @Input() target: string | null = null;
  @Input() rel: string | null = null;
  @Input() ariaLabel: string | null = null;

  @Output() buttonClick = new EventEmitter<MouseEvent>();

  get classes(): string {
    return [
      'app-button',
      `app-button--${this.variant}`,
      `app-button--${this.size}`,
      this.fullWidth ? 'app-button--full' : '',
      this.iconOnly ? 'app-button--icon-only' : '',
      this.disabled ? 'app-button--disabled' : '',
    ].filter(Boolean).join(' ');
  }

  onClick(event: MouseEvent): void {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    this.buttonClick.emit(event);
  }
}
