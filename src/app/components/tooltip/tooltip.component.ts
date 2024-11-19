import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipServiceService } from '../../services/tooltip-service.service';
import gsap from 'gsap';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [CommonModule],
  template: `<div

    #tooltip
    class="p-2 shadow-xl -translate-x-1/2 translate-y-2 fixed z-50 bg-white/0 pointer-events-none select-none backdrop-blur-lg shadow-black/10 border-2 border-border  rounded-lg w-fit"
    [ngStyle]="{
      'top.px': pos.top,
      'left.px': pos.left,

    }"
  >
    {{text}}
  </div>`,
  styleUrl: './tooltip.component.css',
})
export class TooltipComponent implements OnInit {
  pos = { top: 0, left: 0 };
  enabled = false;
  @ViewChild('tooltip') tooltipElement: any;

  text : string = "";

  constructor(private tooltipService: TooltipServiceService) {}



  ngOnInit(): void {
    this.tooltipService.tooltip$.subscribe((enabled) => {
      this.enabled = enabled;
      gsap.to(this.tooltipElement?.nativeElement, {
        scale: enabled ? 1 : 0.9,
        opacity: enabled ? 1 : 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    });

    this.tooltipService.pos$.subscribe((pos) => {
      this.pos = pos;
    })

    this.tooltipService.text$.subscribe((latest) => {
      this.text = latest;
    })
  }

  // @HostListener('window:mousemove', ['$event'])
  // onMouseMove(event: MouseEvent) {
  //   this.pos = { top: event.clientY + 10, left: event.clientX + 10 };
  // }
}
