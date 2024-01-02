import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class BearerTokenInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    if (req.url.includes('api/') && !req.headers.has('Authorization')) {
      const token = localStorage.getItem('access_token');
      if (token) {
        const headers = req.headers.set('Authorization', `Bearer ${token}`);
        const reqClone = req.clone({
          headers,
        });
        return next.handle(reqClone);
      }
    }
    return next.handle(req);
  }
}
