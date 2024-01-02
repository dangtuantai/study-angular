import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import {
  HttpBackend,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { AuthConfig, OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';
import { NZ_CONFIG, NzConfig } from 'ng-zorro-antd/core/config';
import { NZ_DATE_LOCALE, NZ_I18N } from 'ng-zorro-antd/i18n';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthConfig, OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';
import { environment } from '../environments/environment';
import { AuthService } from './core/auth/auth.service';
import { interceptorProviders } from './core/interceptors';
import { AuthModule } from './core/auth/auth.module';
// import { environment } from 'src/environments/environment';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { AuthService, IAuthService } from './core/authentication';
// import { interceptorProviders } from './core/interceptors';
// import { IconsProviderModule } from './icons-provider.module';
// import { PermissionStore } from './shared/directives/permissions/permission.store';

// registerLocaleData(getLocaleData(getCurrentLang()));

// export const createTranslateLoader = (httpBackend: HttpBackend) =>
//   new TranslateHttpLoader(
//     new HttpClient(httpBackend),
//     `${window.location.origin}/assets/i18n/`,
//     '.json'
//   );

const nzConfig: NzConfig = {
  message: {
    nzMaxStack: 3, // The maximum number of messages that can be displayed at the same time
    nzDuration: 5000, //Duration (milliseconds)
  },
  pagination: {
    nzPageSizeOptions: [10, 20, 30, 40, 100, 200],
  },
  badge: {
    nzOverflowCount: 9,
  },
  tabs: {
    nzTabBarGutter: -10,
  },
  theme: {
    primaryColor: '#1f4a7c',
  },
  form: {
    nzTooltipIcon: 'info-circle',
  },
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // IconsProviderModule,
    AuthModule,
    OAuthModule.forRoot(),
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: createTranslateLoader,
    //     deps: [HttpBackend],
    //   },
    //   defaultLanguage: getCurrentLang(),
    // }),
  ],
  providers: [
    // {
    //   provide: NZ_I18N,
    //   useFactory: () => getNzLocale(getCurrentLang()),
    // },
    // {
    //   provide: NZ_DATE_LOCALE,
    //   useFactory: () => getNzDateLocale(getCurrentLang()),
    // },
    // {
    //   provide: LOCALE_ID,
    //   useFactory: () => getCurrentLang(),
    // },
    // {
    //   provide: DEFAULT_CURRENCY_CODE,
    //   useFactory: () => getCurrencyCode(getCurrentLang()),
    // },
    { provide: NZ_CONFIG, useValue: nzConfig },
    // { provide: OAuthStorage, useValue: localStorage },
    // { provide: AuthConfig, useValue: environment.oAuthConfig },
    // { provide: IAuthService, useClass: AuthService },
    // PermissionStore,
    ...interceptorProviders,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
