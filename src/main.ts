import { enableProdMode, importProvidersFrom } from '@angular/core';
import {bootstrapApplication }from '@angular/platform-browser'
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
if (environment.production) {
  enableProdMode();
}
bootstrapApplication(AppComponent, { 
  providers: [importProvidersFrom(HttpClientModule, BrowserAnimationsModule )]
}).catch((err)=>console.error(err))
