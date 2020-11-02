import { Component, OnInit } from '@angular/core';
import {SiteTheme, ThemeService} from '../../../services/theme.service';
import {StyleManagerService} from '../../../services/style-manager.service';
import {LocalStorageService} from '../../../services/local-storage.service';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.css']
})
export class ThemePickerComponent implements OnInit {
  checked = false;
  currentTheme: SiteTheme = ThemeService.defaultTheme;

  constructor(
    public styleService: StyleManagerService,
    private themeService: ThemeService,
    private localStorage: LocalStorageService
  ) {
    const themeName = this.localStorage.getValue(LocalStorageService.themeKey);

    if (themeName) {
      this.selectTheme(themeName);
      this.checked = themeName === 'dark-theme';
    }
    else{
      this.selectTheme(ThemeService.defaultTheme.name);
      this.checked = false;
    }
  }

  ngOnInit(): void {
  }

  selectTheme(themeName: string): void{
    const theme = this.themeService.findTheme(themeName);
    if (!theme){
      return;
    }
    this.themeService.updateTheme(theme);
    this.currentTheme = theme;

    this.styleService.removeStyle('theme');
    this.styleService.setStyle('theme', `themes/${theme.name}.css`);

    if (this.currentTheme) {
      this.localStorage.store(LocalStorageService.themeKey, this.currentTheme.name);
    }

  }

}
