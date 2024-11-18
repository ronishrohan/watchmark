import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { ButtonComponent } from "../components/button/button.component";
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from "../services/theme.service";


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonComponent, MatIconModule],
  template: `
    <div class="w-full flex items-center p-4 px-32 sticky top-0">
      <h1 class="font-instrument text-2xl">Watchmark</h1>
      <div class="flex ml-auto size-fit text-sm gap-2">
        <app-button tooltip="Add a movie to a list" (click)="handleButtonClick()">
          <div class="flex gap-2 p-4 py-2 items-center text-sm font-bold">
            Add Movie
            <mat-icon fontIcon="add"></mat-icon>
          </div>
        </app-button>

        <app-button tooltip="Toggle theme" (click)="this.themeService.toggleTheme()">
          <div class="flex gap-2 p-4 py-2 items-center text-sm font-bold">
            <mat-icon [fontIcon]="currentTheme == 0 ? themeIcons.dark : themeIcons.light" ></mat-icon>
          </div>
        </app-button>
      </div>
    </div>
  `,
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit,OnChanges {
  handleButtonClick(): void {
    console.log('click');
  }
  themeIcons = {dark: "dark_mode", light: "light_mode"}
  currentTheme = 0;

  constructor(public themeService: ThemeService){}

  ngOnInit(): void {
    this.themeService.currentTheme$.subscribe(theme => {
      this.currentTheme = theme == 'light' ? 0 : 1
    })
  }

  ngOnChanges(changes: SimpleChanges): void {

  }
}
