import { ChangeDetectionStrategy, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, NgForm, NonNullableFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { environment } from '../../../environments/environment';
@Component({
    selector     : 'auth-sign-in',
    templateUrl  : './sign-in.component.html',  
    styleUrls: ['./sign-in.component.scss'],  
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthSignInComponent 
{
    validateForm: FormGroup<{
        userName: FormControl<string>;
        password: FormControl<string>;
        remember: FormControl<boolean>;
      }> = this.fb.group({
        userName: ['', [Validators.required]],
        password: ['', [Validators.required]],
        remember: [true]
      });
    
    submitForm(): void {
        if (this.validateForm.valid) {
          console.log('submit', this.validateForm.value);
        } else {
          Object.values(this.validateForm.controls).forEach(control => {
            if (control.invalid) {
              control.markAsDirty();
              control.updateValueAndValidity({ onlySelf: true });
            }
          });
        }
    }
    constructor(private fb: NonNullableFormBuilder,
        private _activatedRoute: ActivatedRoute,
        private _authService: AuthService,
        private _router: Router) {}

    /**
     * Sign in
     */
    signIn(): void
    {
        // Return if the form is invalid
        if ( this.validateForm.invalid )
        {
            return;
        }

        // Disable the form
        this.validateForm.disable();

        // Hide the alert

        // Sign in
        this._authService.signIn(this.validateForm.value as { username: string; password: string })
            .subscribe(
                () => {

                    // Set the redirect url.
                    // The '/signed-in-redirect' is a dummy url to catch the request and redirect the user
                    // to the correct page after a successful sign in. This way, that url can be set via
                    // routing file and we don't have to touch here.
                    const redirectURL = this._activatedRoute.snapshot.queryParamMap.get('redirectURL') || '/signed-in-redirect';

                    // Navigate to the redirect url
                    this._router.navigateByUrl(redirectURL);

                }, (response) => {

                    // Re-enable the form
                    this.validateForm.enable();

                    // Reset the form
                    this.validateForm.reset();

                },
            );
    }

    onForgotPassword(): void {
        window.location.href = `${environment.apiUrl}/auth/realms/ssba/login-actions/reset-credentials?client_id=frontend`
    }
}
