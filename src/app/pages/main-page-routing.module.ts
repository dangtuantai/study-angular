import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'setting',
        loadChildren: () =>
          import('./settings/settings-routing.module').then(
            (m) => m.SettingsRoutingModule
          ),
      },
      {
        path: 'test',
        loadChildren: () =>
          import('./test/test-routing.module').then(
            (m) => m.TestRoutingModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule { }
