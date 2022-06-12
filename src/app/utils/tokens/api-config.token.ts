import { InjectionToken } from '@angular/core';

export type ApiConfig = {
  covidApiUrl: string;
};

export const API_CONFIG_TOKEN = new InjectionToken<ApiConfig>('API config token for loading COVID data');
