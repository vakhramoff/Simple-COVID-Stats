import { InjectionToken } from '@angular/core';

export const APP_TITLE_TOKEN = new InjectionToken<string>('Application Title', {
  factory: () => 'COVID',
});
