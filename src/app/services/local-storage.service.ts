import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }
  static themeKey = 'theme-current-name';
  store(key: string, value: string): void {
    localStorage[key] = value;
  }
  getValue(key: string): string | null {
    return localStorage[key] || null;
  }
  clearStore(key: string): void {
    localStorage.removeItem(key);
  }


}
