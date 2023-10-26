import { Pipe, PipeTransform } from '@angular/core';
import { TodoItem } from './todo.model';

@Pipe({
  name: 'dateFilter',
})
export class DateFilterPipe implements PipeTransform {
  transform(items: TodoItem[], filterDate: Date): TodoItem[] {
    if (!filterDate) {
      return items;
    }

    return items.filter((item) => item.date.toDateString() === filterDate.toDateString());
  }
}
