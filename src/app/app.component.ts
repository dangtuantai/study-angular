import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `<router-outlet />`,  
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(
  ) {
  }

  async ngOnInit() {
    // await this.authService.initialLoginSequence();
  }
}
