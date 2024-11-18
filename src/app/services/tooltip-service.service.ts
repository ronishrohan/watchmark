import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TooltipServiceService {

  private tooltipSubject = new BehaviorSubject<boolean>(false);
  public tooltip$ = this.tooltipSubject.asObservable();

  private textSubject = new BehaviorSubject<string>('');
  public text$ = this.textSubject.asObservable();

  private show = true;

  public showTooltip(){
    this.show = true;
    setTimeout(() => {
      if(this.show == true){
        this.tooltipSubject.next(true);
      }

    }, 2000);
  }

  public hideTooltip(){
    this.show = false;
    this.tooltipSubject.next(false);
  }
  public setTooltip(to: string){
    this.textSubject.next(to);
  }

  constructor() { }
}
