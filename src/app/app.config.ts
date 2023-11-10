import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import localePl from '@angular/common/locales/pl'
import { registerLocaleData } from '@angular/common';

import { routes } from './app.routes';

registerLocaleData(localePl);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
