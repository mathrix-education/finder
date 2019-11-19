import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {UrlCatcherService} from '../services/url-catcher.service';

@Injectable({
  providedIn: 'root'
})
export class HttpValidatorInterceptor implements HttpInterceptor {


  constructor(private urlCatcher: UrlCatcherService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const sendDate = new Date().getTime();

    return next.handle(req).pipe(
      tap((response: HttpEvent<any>) => {
        // console.log(req);
        if (response instanceof HttpResponse) {
          const timeoutRequest = (new Date().getTime() - sendDate);
          this.urlCatcher.successRequests.push({url: response.url, status: response.status, method: req.method, timeout: timeoutRequest});
        }
      }, response => {
        const timeoutRequest = (new Date().getTime() - sendDate);

        this.urlCatcher.failedRequests.push({url: response.url, status: response.status, method: req.method, timeout: timeoutRequest});
      })
    );
  }
}
