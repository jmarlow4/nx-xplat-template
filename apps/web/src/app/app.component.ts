import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@nx-xplat-template/xplat/web/features';

@Component({
  selector: 'nx-xplat-template-root',
  templateUrl: './app.component.html',
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}
