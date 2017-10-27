import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
      <div style="padding: 10px">
        <p>{{ value }}</p>
        <app-child></app-child>
      </div>
  `
})

export class ParentComponent {
    value = 0;
}
