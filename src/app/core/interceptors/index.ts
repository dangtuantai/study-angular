import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AcceptLanguageInterceptor } from './accept-language.interceptor';
import { ApiPrefixInterceptor } from './api-prefix.interceptor';
import { BearerTokenInterceptor } from './bearer-token.interceptor';
import { TenantInterceptor } from './tenant.interceptor';
import { TimeZoneInterceptor } from './time-zone.interceptor';
import { WorkspaceInterceptor } from './workspace.interceptor';

export const interceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: BearerTokenInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ApiPrefixInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AcceptLanguageInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TimeZoneInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TenantInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: WorkspaceInterceptor,
    multi: true,
  }
];
