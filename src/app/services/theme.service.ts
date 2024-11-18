import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private currentThemeSubject = new BehaviorSubject<'light' | 'dark'>('light');
  currentTheme$: Observable<'light' | 'dark'> = this.currentThemeSubject.asObservable();


  constructor(rendererFactory: RendererFactory2, @Inject(DOCUMENT) private document: Document) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.setTheme(this.currentThemeSubject.value);
  }

  setTheme(theme: 'light' | 'dark') {
    const rootElement = this.document.body;
    this.renderer.removeClass(rootElement, this.currentThemeSubject.value);
    this.renderer.addClass(rootElement, theme);
    this.currentThemeSubject.next(theme);
  }

  toggleTheme() {
    console.log(this.currentThemeSubject.value)
    const newTheme = this.currentThemeSubject.value === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }
}
