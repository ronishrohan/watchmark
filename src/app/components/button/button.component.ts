import { Component, Input, Output, EventEmitter } from '@angular/core';
import { twMerge } from 'tailwind-merge';
import { TooltipServiceService } from '../../services/tooltip-service.service';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  template: `<button
   #button
    (mouseenter)="tooltipService.showTooltip(button);tooltipService.setTooltip(tooltip)"
    (mouseleave)="tooltipService.hideTooltip()"
    (click)="handleClickEvent()"
    [class]="mergedClasses"
  >
    <ng-content></ng-content>
  </button>`,
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() classname: string = '';
  @Input() tooltip: string = '' ;

  @Output() clicked = new EventEmitter<void>();

  handleClickEvent() {
    this.clicked.emit();
  }


  constructor(public tooltipService: TooltipServiceService) {}

  get mergedClasses(): string {
    const defaultClasses =
      'bg-accent text-text-invert *:transition-transform active:*:scale-95 active:bg-accent hover:bg-accent-active hover:shadow-xl hover:shadow-black/20 transition-all rounded-lg';
    return twMerge(defaultClasses, this.classname);
  }
}
