import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
<<<<<<< HEAD
  .catch(err => console.log(err));

=======
  .catch(err => console.error(err));
>>>>>>> 7a675035078d9a7286d53c6ffab12a1e40b6ecd7
