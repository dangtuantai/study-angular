import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { getTenantId } from '../utils';

export class TenantInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    if (req.url.includes('api/')) {
      const tenantId = getTenantId();

      if (tenantId) {
        const headers = req.headers.set('tenantid', `${tenantId}`);
        const reqClone = req.clone({
          headers,
        });
        return next.handle(reqClone);
      }
    }
    return next.handle(req);
  }
}
