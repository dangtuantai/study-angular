import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import {
  HttpBackend,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthConfig, OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';
import { NZ_CONFIG, NzConfig } from 'ng-zorro-antd/core/config';
import { NZ_DATE_LOCALE, NZ_I18N } from 'ng-zorro-antd/i18n';
import { AppComponent } from './app.component';
import { interceptorProviders } from './core/interceptors';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { getCurrencyCode, getCurrentLang, getNzDateLocale, getNzLocale } from './core/utils';
import { AuthService } from './core/auth/auth.service';
import { environment } from '../environments/environment';
import { NoAuthGuard } from './core/auth/guards/noAuth.guard';
import { AuthGuard } from './core/auth/guards/auth.guard';


const routes: Routes = [
  // {
  //   path: '',
  //   loadComponent: () =>
  //     import('./landing-page/landing-page.component').then(
  //       (m) => m.LandingPageComponent
  //     ),
  // },
  {
    path: 'main',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/main-page-routing.module').then(
        (m) => m.MainPageRoutingModule
      ),
  },
  {
    path: 'sign-in',
    canActivate: [NoAuthGuard],
    canActivateChild: [NoAuthGuard],
    loadChildren: () =>
      import('./login/sign-in/sign-in.module').then(
        (m) => m.AuthSignInModule
      ),
  },
  {
    path: 'sign-out',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    loadChildren: () =>
      import('./login/sign-out/sign-out.module').then(
        (m) => m.AuthSignOutModule
      ),
  },
  { path: '**', redirectTo: 'main', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
