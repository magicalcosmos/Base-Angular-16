// ======================= Angular modules =======================

import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ======================= External modules =======================

import { TranslateService, TranslateModule, TranslateLoader }     from '@ngx-translate/core';
import { TranslateHttpLoader }  from '@ngx-translate/http-loader';
import { AngularSvgIconModule } from 'angular-svg-icon';

// ======================= Internal modules =======================

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

// ======================= Service modules =======================

import { HttpInterceptorService } from '@services/http-interceptor.service';
import { StoreService } from '@services/store.service';

// ======================= Components modules =======================

import { AppComponent } from './app.component';

// ======================= Factories modules =======================

import { appInitFactory } from '@factories/app-init.factory';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // Angular modules

    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,

    // External modules

    TranslateModule.forRoot({
      loader :
      {
        provide    : TranslateLoader,
        useFactory : (createTranslateLoader),
        deps       : [HttpClient]
      }
    }),
    AngularSvgIconModule.forRoot(),

    // Internal modules

    SharedModule,
    AppRoutingModule
  ],
  providers: [
    // Services

    {
      provide  : HTTP_INTERCEPTORS,
      useClass : HttpInterceptorService,
      multi    : true
    },

    // External modules

    {
      provide    : APP_INITIALIZER,
      useFactory : appInitFactory,
      deps       : [ TranslateService, Injector ],
      multi      : true
    },

    StoreService,

    // Pipes

    DatePipe,

    // Guards

    // Interceptors
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function createTranslateLoader(http : HttpClient)
{
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
