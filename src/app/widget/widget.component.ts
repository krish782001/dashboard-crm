import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent {
  @Input() widget: any;
  @Output() onRemove = new EventEmitter<void>();

  removeWidget() {
    this.onRemove.emit();
  }
}
