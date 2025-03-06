import { Injectable } from '@angular/core';
import { Task } from '../task-types';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5200/api/tasks'
  private tasksSubject = new BehaviorSubject<Array<Task>>([]);
  tasks$ = this.tasksSubject.asObservable();

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Array<Task>> {
    this.refreshTasks()
    return this.tasks$
  }

  refreshTasks() {
    this.http.get<Array<Task>>(this.apiUrl).subscribe(
      tasks => this.tasksSubject.next(tasks));
  }

  /*
   * This is the only function that you'll need to change in this service.
   * It should update an already existing task entry with new information entered by the user
   */
  updateTask(id: string, task: Task): void { }

  createTask(newTask: Task): void {
    this.http.post(this.apiUrl, { task: newTask }).subscribe({
      next: () => {
        this.refreshTasks()
      }
    })
  }

  deleteTask(index: string): void {
    this.http.delete(`${this.apiUrl}/${index}`).subscribe({
      next: () => {
        this.refreshTasks()
      }
    })
  }
}
