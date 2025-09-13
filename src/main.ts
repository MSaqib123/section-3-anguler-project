/// <reference types="@angular/localize" />

import { appConfig } from './app/app.config';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

//=========== StandAlone ==============
// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));


//=========== Module Bass ==============
platformBrowserDynamic().bootstrapModule(AppModule);
