import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  @Input() category: any;
  @Output() onAddWidget = new EventEmitter<{ widgetName: string, widgetText: string }>();
  @Output() onRemoveWidget = new EventEmitter<number>();

  addWidget(widgetName: string, widgetText: string) {
    this.onAddWidget.emit({ widgetName, widgetText });
  }

  removeWidget(widgetIndex: number) {
    this.onRemoveWidget.emit(widgetIndex);
  }
}
