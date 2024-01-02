import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthSignOutComponent } from './sign-out.component';
import { authSignOutRoutes } from './sign-out.routing';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AuthSignOutComponent
    ],
    imports     : [
        RouterModule.forChild(authSignOutRoutes),
        CommonModule,
        ReactiveFormsModule
    ]
})
export class AuthSignOutModule
{
}
