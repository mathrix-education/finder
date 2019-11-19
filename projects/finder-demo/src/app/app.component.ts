import { Component } from '@angular/core';
import {UrlCatcherService} from './services/url-catcher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'finder-demo';

  constructor(public urlCatcher: UrlCatcherService) {
    this.urlCatcher.bearerToken = localStorage.getItem('mathrix-drive-token');
  }
}
