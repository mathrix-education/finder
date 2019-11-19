import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlCatcherService {
  failedRequests: any[] = [];
  successRequests: any[] = [];

  bearerToken = '';

  resetList() {
    this.failedRequests.length = 0;
    this.successRequests.length = 0;
  }

}
