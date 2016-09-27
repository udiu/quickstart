
// This code initializes the platform that your application runs in, then uses the platform to bootstrap your AppModule.
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

//  application runs directly in the browser
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);

// On a mobile device, you might load a module with Apache Cordova or NativeScript,
//  using a bootstrap function that's specific to that platform.
