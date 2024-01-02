import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// import { TranslateModule } from '@ngx-translate/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { LandingPageComponent } from './landing-page.component';

const NzModules = [
  NzLayoutModule,
  NzMenuModule,
  NzCarouselModule,
  NzButtonModule,
  NzIconModule,
  NzFormModule,
  NzInputModule,
  NzSelectModule,
  NzMessageModule,
];

@NgModule({
    imports: [
        CommonModule,
        NzModules,
        ReactiveFormsModule,
        LandingPageComponent,
    ],
})
export class LandingPageModule {}
