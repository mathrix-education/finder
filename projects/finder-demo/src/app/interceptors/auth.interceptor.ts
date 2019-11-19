import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {UrlCatcherService} from '../services/url-catcher.service';
import {API_CONFIG} from '../../../../finder/src/lib/api.config';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private urlCatcher: UrlCatcherService,
              @Inject(API_CONFIG) protected api: string) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Add authentication to request to our API
    if (req.url.startsWith(this.api)) {

      // add cors parameters
      const headerParams = {
        withCredentials: true,
        Authorization: 'Bearer ',
        setHeaders: {Authorization: `Bearer ` + this.urlCatcher.bearerToken}
      };

      // Pass on the cloned request instead of the original request.
      return next.handle(req.clone(headerParams));
    } else {
      return next.handle(req);
    }
  }
}
