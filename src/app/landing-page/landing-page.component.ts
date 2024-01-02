import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
// import { IAuthService } from '../core/authentication';

@Component({
    selector: 'app-landing-page',
    template: `<router-outlet />`,
    standalone: true,
    imports: [RouterOutlet],
})
export class LandingPageComponent implements OnInit, OnDestroy {
  destroy$: Subject<void> = new Subject();

  constructor(
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    // this.authService.canActivateProtectedRoutes$
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((canActive: boolean) => {
    //     if (canActive) {
    //       setTimeout(() => {
    //         this.router.navigate(['main']);
    //       }, 0);
    //     }
    //     else {
    //       this.authService.login();
    //     }
    //   });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
