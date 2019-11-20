import { Component } from '@angular/core';
import {UrlCatcherService} from '../../services/url-catcher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'finder-demo';
  mockFolder: string[] = [
    'Element 1',
    'Element 2',
    'Element 3',
    'Element 4',
    'Element 5',
    'Element 1',
    'Element 2',
    'Element 3',
    'Element 4',
    'Element 5',
    'Element 1',
    'Element 2',
    'Element 3',
    'Element 4',
    'Element 5'
  ];

  constructor(public urlCatcher: UrlCatcherService) {
    this.urlCatcher.bearerToken = localStorage.getItem('mathrix-drive-token');
  }

  logEvent($event: string) {
    console.log($event);
  }
}
