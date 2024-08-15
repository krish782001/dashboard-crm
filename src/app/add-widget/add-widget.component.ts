import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-widget',
  templateUrl: './add-widget.component.html',
  styleUrls: ['./add-widget.component.css']
})
export class AddWidgetComponent {
  widgetName: string = '';
  widgetText: string = '';
  @Output() addWidgetEvent = new EventEmitter<{ widgetName: string, widgetText: string }>();

  addWidget() {
    this.addWidgetEvent.emit({ widgetName: this.widgetName, widgetText: this.widgetText });
    this.widgetName = '';
    this.widgetText = '';
  }
}
