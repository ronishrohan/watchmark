import { Component } from '@angular/core';
import { ButtonComponent } from '../components/button/button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonComponent],
  template: `
  <div class="w-full flex items-center p-4 px-32" >
    <h1 class="font-instrument text-2xl">Watchmark</h1>
    <div class="flex ml-auto size-fit" >
      <app-button></app-button>
    </div>
  </div>
  `,
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
