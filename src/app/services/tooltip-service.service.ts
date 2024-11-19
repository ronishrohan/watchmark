import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TooltipServiceService {
  private tooltipSubject = new BehaviorSubject<boolean>(false);
  public tooltip$ = this.tooltipSubject.asObservable();

  private textSubject = new BehaviorSubject<string>('');
  public text$ = this.textSubject.asObservable();

  private show = true;

  public posSubject = new BehaviorSubject<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });
  public pos$ = this.posSubject.asObservable();

  public showTooltip(el: Element) {
    this.show = true;
    const bounds = el.getBoundingClientRect();
    this.posSubject.next({ top: bounds.bottom, left: bounds.left + bounds.width / 2 });

    setTimeout(() => {
      if (this.show == true) {
        this.tooltipSubject.next(true);
      }
    }, 500);
  }

  public hideTooltip() {
    this.show = false;
    this.tooltipSubject.next(false);
  }
  public setTooltip(to: string) {
    this.textSubject.next(to);
  }

  constructor() {}
}
