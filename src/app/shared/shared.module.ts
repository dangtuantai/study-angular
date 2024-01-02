import { CommonModule, CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { MultipleSelectSearchFilterModule } from './multiple-select-search-control/multiple-select-search-control.module';
import { NzSpaceModule } from 'ng-zorro-antd/space';
// import {
//   AppCurrencyPipe,
//   FormatNumberPipe,
//   GetLabelByValue,
//   IsInHouseFleetPipe,
//   JoinPipe,
//   SafePipe,
//   StatusColor
// } from './pipes';
// import { AppPermissionPipe } from './pipes/permission.pipe';

// const PIPES: Type<any>[] = [
//   GetLabelByValue,
//   StatusColor,
//   JoinPipe,
//   FormatNumberPipe,
//   SafePipe,
//   IsInHouseFleetPipe,
//   AppPermissionPipe,
// ];

const nzModules = [
  NzBreadCrumbModule,
  NzGridModule,
  NzButtonModule,
  NzPageHeaderModule,
  NzTableModule,
  NzPaginationModule,
  NzIconModule,
  NzDrawerModule,
  NzFormModule,
  NzSelectModule,
  NzDatePickerModule,
  NzInputModule,
  NzCardModule,
  NzTagModule,
  NzDropDownModule,
  NzSpinModule,
  NzNotificationModule,
  NzMessageModule,
  NzRadioModule,
  NzToolTipModule,
  NzModalModule,
  NzSwitchModule,
  NzInputNumberModule,
  NzDividerModule,
  NzUploadModule,
  NzAvatarModule,
  NzCheckboxModule,
  NzBadgeModule,
  NzAlertModule,
  NzSelectModule,
  NzProgressModule,
  NzSpaceModule,
];

@NgModule({
  imports: [CommonModule],
  // declarations: [...PIPES, AppCurrencyPipe],
  exports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,
    // AppCurrencyPipe,
    ...nzModules,
    // ...PIPES,
    MultipleSelectSearchFilterModule,
  ],
  providers: [
    CurrencyPipe,
    // AppCurrencyPipe
  ],
})
export class SharedModule {}
