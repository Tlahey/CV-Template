import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import {NgxAnalyticsGoogleAnalytics} from "ngx-analytics/ga";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

// if (environment.production) {
  // ...
  NgxAnalyticsGoogleAnalytics.prototype.createGaSession(environment.googleAnalytics);
// }