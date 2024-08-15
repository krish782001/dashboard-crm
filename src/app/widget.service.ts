import { Injectable } from '@angular/core';
import { Category } from './models/category.model'; // Import the model

@Injectable({
  providedIn: 'root'
})
export class WidgetService {
  private categories: Category[] = [
    {
      name: 'CSPM Executive Dashboard',
      widgets: [
        { name: 'Widget 1', text: 'Some random text for Widget 1' },
        { name: 'Widget 2', text: 'Some random text for Widget 2' }
      ]
    }
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  addWidget(categoryIndex: number, widgetName: string, widgetText: string) {
    this.categories[categoryIndex].widgets.push({ name: widgetName, text: widgetText });
  }

  removeWidget(categoryIndex: number, widgetIndex: number) {
    this.categories[categoryIndex].widgets.splice(widgetIndex, 1);
  }
}
