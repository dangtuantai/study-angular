import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test.component';

const routes: Routes = [
  {
    path: '',
    component: TestComponent,
    // children: [
    //   {
    //     path: '',
    //     redirectTo: 'company-warehouse',
    //     pathMatch: 'full',
    //   },
    //   {
    //     path: 'company-warehouse',

    //     loadComponent: () =>
    //       import(
    //         './setting-company-warehouse/setting-company-warehouse.component'
    //       ).then((m) => m.SettingCompanyWarehouseComponent),
    //     canActivate: [AuthPermissionGuard]
    //   },
    //   {
    //     path: 'warehouse',

    //     loadComponent: () =>
    //       import('./setting-warehouse/setting-warehouse.component').then(
    //         (m) => m.SettingWarehouseComponent
    //       ),
    //     canActivate: [AuthPermissionGuard]


    //   },
    //   {
    //     path: 'customer',

    //     loadComponent: () =>
    //       import('./setting-customer/setting-customer.component').then(
    //         (m) => m.SettingCustomerComponent
    //       ),
    //     canActivate: [AuthPermissionGuard]

    //   },
    //   {
    //     path: 'vendor',

    //     loadComponent: () =>
    //       import('./setting-vendor/setting-vendor.component').then(
    //         (m) => m.SettingVendorComponent
    //       ),
    //     canActivate: [AuthPermissionGuard]


    //   },
    //   {
    //     path: 'role',

    //     loadComponent: () =>
    //       import('./setting-role/setting-role.component').then(
    //         (m) => m.SettingRoleComponent
    //       ),
    //     canActivate: [AuthPermissionGuard]
    //   },
    //   {
    //     path: 'user-management',

    //     loadComponent: () =>
    //       import('./setting-user-management/setting-user-management.component').then(
    //         (m) => m.SettingUserManagementComponent
    //       ),
    //     canActivate: [AuthPermissionGuard]


    //   },
    //   {
    //     path: 'region',

    //     loadComponent: () =>
    //       import('./setting-region/setting-region.component').then(
    //         (m) => m.SettingRegionComponent
    //       ),
    //     canActivate: [AuthPermissionGuard],
    //   },
    //   {
    //     path: 'province',
    //     loadComponent: () =>
    //       import('./setting-province/setting-province.component').then(
    //         (m) => m.SettingProvinceComponent
    //       ),
    //     canActivate: [AuthPermissionGuard],

    //   },
    // ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestRoutingModule {
}
