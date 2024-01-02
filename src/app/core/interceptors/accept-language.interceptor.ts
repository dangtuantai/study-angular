import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { getCurrentLang } from '../utils';

export class AcceptLanguageInterceptor implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        if (!req.headers.has('Accept-Language')) {
            const language = getCurrentLang();
            const headers = req.headers.set('Accept-Language', language);
            const reqClone = req.clone({
                headers,
            });
            return next.handle(reqClone);
        }

        return next.handle(req);
    }
}
