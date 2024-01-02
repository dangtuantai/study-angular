import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthSignInComponent } from './sign-in.component';
import { authSignInRoutes } from './sign-in.routing';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CommonModule } from '@angular/common';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@NgModule({
    declarations: [
        AuthSignInComponent
    ],
    imports     : [
        RouterModule.forChild(authSignInRoutes),
        NzInputModule,NzGridModule,NzButtonModule,        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NzCheckboxModule
    ]
})
export class AuthSignInModule
{
}
