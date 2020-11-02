import { Component, OnInit } from '@angular/core';
import {SiteTheme, ThemeService} from '../../services/theme.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  theme: SiteTheme = ThemeService.defaultTheme;

  constructor(themeService: ThemeService) {
    themeService.theme$.subscribe(theme => { this.theme = theme; });
  }
  ngOnInit(): void {
  }

}
