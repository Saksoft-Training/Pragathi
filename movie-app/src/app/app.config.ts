import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { FavoritesService } from './service/favorites';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    FavoritesService // module-level style provider (available app-wide)
  ]
};
