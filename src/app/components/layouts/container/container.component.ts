import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  template: `<div class="container py-4">
    <div class="row">
      <div class="col-md-12">
        <ng-content></ng-content>
      </div>
    </div>
  </div>`,
})
export class ContainerComponent {}
