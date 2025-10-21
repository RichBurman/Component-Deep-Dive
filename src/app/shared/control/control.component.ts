import {
  Component,
  HostBinding,
  HostListener,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: { class: 'control', '(click)': 'onClick()' },
})
export class ControlComponent {
  // @HostBinding() className = 'control';

  // @HostListener()
  label = input.required<string>();

  onClick() {
    console.log(`${this.label} control clicked`);
  }
}
