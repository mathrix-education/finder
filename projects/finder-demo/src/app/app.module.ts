import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './components/app/app.component';
import {FinderModule} from '../../../finder/src/lib/finder.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {API_CONFIG} from './api.config';
import {environment} from '../environments/environment';
import {AuthInterceptor} from './interceptors/auth.interceptor';
import {HttpValidatorInterceptor} from './interceptors/http-validator.interceptor';
import {DriveApiModule} from '@mathrix-education/drive-angular-api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SimpleArrayComponent } from './components/simple-array/simple-array.component';
import { CdnViewerComponent } from './components/cdn-viewer/cdn-viewer.component';
import {MatCardModule} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'array',
    component: SimpleArrayComponent
  },
  {
    path: 'cdn',
    component: CdnViewerComponent
  },
  {
    path: '**',
    component: AppComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SimpleArrayComponent,
    CdnViewerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FinderModule,
    DriveApiModule.withConfig({api: environment.api}),
    MatCardModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent],
  providers: [
    {provide: API_CONFIG, useValue: environment.api},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: HttpValidatorInterceptor, multi: true}
  ]
})
export class AppModule { }
