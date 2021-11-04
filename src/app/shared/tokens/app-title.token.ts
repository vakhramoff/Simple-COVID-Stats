import { InjectionToken } from '@angular/core';

export const APP_TITLE_TOKEN = new InjectionToken<string>('API config token for loading COVID data', {
  factory: () => 'COVID',
});
