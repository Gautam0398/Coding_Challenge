// No need to change this file
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Task } from '../../task-types';

@Component({
  selector: 'app-task-display',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './task-display.component.html',
})
export class TaskDisplayComponent implements OnInit {
  protected tasks$: Observable<Array<Task>>;


  constructor(private taskService: TaskService) {
    this.tasks$ = this.taskService.getTasks()
  }

  ngOnInit(): void {
      this.taskService.refreshTasks()
  }
}
