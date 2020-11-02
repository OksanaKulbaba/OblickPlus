import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';


export interface SiteTheme{
  name: string;
  displayName?: string;
  accent?: string;
  primary?: string;
  isDark?: boolean;
  isDefault?: boolean;
}

@Injectable({
  providedIn: 'root'
})


export class ThemeService {


  static  defaultTheme: SiteTheme =  {
    name: 'light-theme',
    displayName: 'Light theme',
    isDark: false,
    isDefault: true
  };
  static darkTheme: SiteTheme  = {
    name: 'dark-theme',
    displayName: 'Dark theme',
    isDark: true
  };
  themes: SiteTheme[] = [
    ThemeService.darkTheme,
    ThemeService.defaultTheme
  ];
  private  themeSubject$ = new BehaviorSubject(ThemeService.defaultTheme);
  theme$ = this.themeSubject$.asObservable();

  constructor() { }

  updateTheme(theme: SiteTheme): void {
    this.themeSubject$.next(theme);
  }

  findTheme(themeName: string): SiteTheme| undefined {
    return this.themes.find(theme => theme.name === themeName);
  }

}
