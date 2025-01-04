import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {isArray} from 'lodash';
import {ThemeService} from '../configs/theme/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  constructor(private themeService: ThemeService) {
  }

  changeTheme(){
    this.themeService.toggleTheme();
  }
}
