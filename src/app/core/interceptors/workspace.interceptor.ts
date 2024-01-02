import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class WorkspaceInterceptor implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        if (!req.headers.has('is_workspace')) {
            const workspace = localStorage.getItem('is_workspace');
            if (workspace) {
                const isWorkspace = workspace == 'Workspace' ? true : false;
                const headers = req.headers.set(
                    'is_workspace',
                    `${isWorkspace}`
                );
                const reqClone = req.clone({
                    headers,
                });
                return next.handle(reqClone);
            }
        }
        return next.handle(req);
    }
}
