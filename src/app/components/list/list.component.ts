import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  template: `<div *ngIf="enabled" (click)="closeList()" class="fixed size-full bg-black/5 top-0 left-0" ></div> <div class="size-full h-[20vh]">
    <div
      #list
      (click)="!enabled && handleButtonClick()"
      [ngStyle]="{
        position: this.position,
        width: this.width
      }"
      class="size-full rounded-lg hover:border-border-active hover:shadow-xl hover:shadow-black/20 cursor-pointer border-2 border-border flex flex-col p-[1vw] bg-card overflow-hidden h-[20vh] text-text"
    >
      <h1 class="font-instrument text-xl">Must watch</h1>
      <div
        class="flex flex-col gap-[0.1vw] whitespace-nowrap text-[1.2vw] text-black/70"
      >
        <div class="">Good Will Hunting</div>
        <div class="">Dead Poet's Society</div>
        <div class="">Good Will Hunting</div>
      </div>
    </div>
  </div>`,
  styleUrl: './list.component.css',
})
export class ListComponent {
  public position = 'relative';
  public width = '100%';
  public enabled = false;

  public lastRect : any = {};

  @ViewChild('list') listElement: ElementRef;

  public closeList(){
    gsap.to(this.listElement.nativeElement, {
      top: `${this.lastRect.top}px`,
      left: `${this.lastRect.left}px`,
      height: `${this.lastRect.height}px`,
      width: `${this.lastRect.width}px`,
      translateX: '0%',
      translateY: '0%',
      duration: 0.5,
      ease: "power4.out",
      onComplete: () => {
        this.listElement.nativeElement.style.zIndex = 10;
        this.listElement.nativeElement.style.top = 0;
        this.listElement.nativeElement.style.left = 0;
        this.listElement.nativeElement.style.position = 'relative';
        this.enabled = false;
      }
    });
  }

  private expandList() {
    const bounds = this.listElement.nativeElement.getBoundingClientRect();
    this.enabled = true;
    this.lastRect = bounds;
    this.listElement.nativeElement.style.position = 'fixed';
    this.listElement.nativeElement.style.top = bounds.top + 'px';
    this.listElement.nativeElement.style.left = bounds.left + 'px';
    this.listElement.nativeElement.style.zIndex = 100;
    this.listElement.nativeElement.style.width = bounds.width + 'px';
    this.listElement.nativeElement.style.height = bounds.height + 'px';

    gsap.to(this.listElement.nativeElement, {
      top: `${window.innerHeight / 2}px`,
      left: `${window.innerWidth / 2}px`,
      height: `${window.innerHeight * 0.8}px`,
      width: `${window.innerWidth * 0.8}px`,
      translateX: '-50%',
      translateY: '-50%',
      duration: 0.5,
      ease: 'power4.out',
    });
  }

  public handleButtonClick() {
    this.expandList();
  }
}
