export class TodoItem {
  name: string;
  date: Date;
  status: 'Active' | 'Completed';

  constructor(name: string, date: Date, status: 'Active' | 'Completed') {
    this.name = name;
    this.date = date;
    this.status = status;
  }
}
