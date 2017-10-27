import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
      <div style="padding: 10px">
        <p>{{ value }}</p>
        <app-child (onChange)="onChange($event)"></app-child>
      </div>
  `
})

export class ParentComponent {
    value = 0;

    onChange(isIncrement: boolean) {
        this.value += (isIncrement ? 1 : -1);
    }
}
