import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  list: any[] = [];

  addTask(item: string) {
    this.list.push({ id: this.list.length, name: item });
    console.log(this.list);
  }
  removeTask(item: number) {
    this.list.pop();
  }
}
