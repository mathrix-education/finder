import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FinderModule} from '../../../finder/src/lib/finder.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {API_CONFIG} from '../../../finder/src/lib/api.config';
import {environment} from '../environments/environment';
import {AuthInterceptor} from './interceptors/auth.interceptor';
import {HttpValidatorInterceptor} from './interceptors/http-validator.interceptor';
import {DriveApiModule} from '@mathrix-education/drive-angular-api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FinderModule,
    DriveApiModule.withConfig({api: environment.api})
  ],
  bootstrap: [AppComponent],
  providers: [
    {provide: API_CONFIG, useValue: environment.api},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: HttpValidatorInterceptor, multi: true}
  ]
})
export class AppModule { }
