import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class TimeZoneInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    if (!req.headers.has('X-TimezoneOffset')) {
      const headers = req.headers.set(
        'X-TimezoneOffset',
        `${new Date().getTimezoneOffset()}`,
      );
      const reqClone = req.clone({
        headers,
      });
      return next.handle(reqClone);
    }

    return next.handle(req);
  }
}
