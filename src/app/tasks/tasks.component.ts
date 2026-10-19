import { Component, input } from '@angular/core';
import { User } from '../user/user.model';

@Component({
  imports: [],
  selector: 'app-tasks',
  styleUrl: './tasks.component.css',
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
  public taskList = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced features of Angular',
      dueDate: '2026-12-31',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Build UI Components',
      summary: 'Design and build accessible, reusable UI components',
      dueDate: '2026-11-15',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Optimize Database Queries',
      summary: 'Analyze slow SQL queries and implement caching strategies',
      dueDate: '2026-10-30',
    },
    {
      id: 't4',
      userId: 'u4',
      title: 'Setup CI/CD Pipeline',
      summary: 'Automate deployment pipelines using GitHub Actions',
      dueDate: '2026-11-01',
    },
    {
      id: 't5',
      userId: 'u5',
      title: 'API Integration',
      summary: 'Integrate payment gateway services into the backend API',
      dueDate: '2026-12-10',
    },
    {
      id: 't6',
      userId: 'u6',
      title: 'State Management with RxJS',
      summary: 'Implement reactive state flows using RxJS signals and observables',
      dueDate: '2026-11-20',
    },
  ];
  public user = input.required<User | null>();
  public isSameuser(taskUserId: string): boolean {
    return taskUserId === this.user()?.id;
  }
  public deleteTask(taskId: string) {
    const idx = this.taskList.findIndex((t) => t.id === taskId);
    this.taskList.splice(idx, 1);
  }
}
