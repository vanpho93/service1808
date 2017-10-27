import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
      <div>
          <button (click)="incr()">Increment</button>
          <button (click)="desc()">Descrement</button>
      </div>
  `
})

export class ChildComponent {
    @Output() onChange = new EventEmitter<boolean>();

    incr(): void {
        this.onChange.emit(true);
    }

    desc(): void {
        this.onChange.emit(false);
    }
}

// store - thay doi


