import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../widget.service';
import { Category } from '../models/category.model'; // Import the model

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  categories: Category[] = []; // Correctly typed categories array

  constructor(private widgetService: WidgetService) { }

  ngOnInit(): void {
    this.categories = this.widgetService.getCategories();
  }

  addWidget(categoryIndex: number, widgetName: string, widgetText: string) {
    this.widgetService.addWidget(categoryIndex, widgetName, widgetText);
  }

  removeWidget(categoryIndex: number, widgetIndex: number) {
    this.widgetService.removeWidget(categoryIndex, widgetIndex);
  }
}
