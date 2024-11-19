import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { ButtonComponent } from "./components/button/button.component";
import { MatIconModule } from '@angular/material/icon';
import { TooltipComponent } from "./components/tooltip/tooltip.component";
import { ListComponent } from "./components/list/list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ButtonComponent, MatIconModule, TooltipComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'watchmark';
}
