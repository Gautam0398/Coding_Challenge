import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { FormsModule } from '@angular/forms';
import { Task } from '../../task-types';
@Component({
  selector: 'app-task-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-update.component.html',
})
export class TaskUpdateComponent {
  /*
   * Implement your update functionality in this component
   */

  constructor(private taskService: TaskService) {}
  protected taskId: string = ''; // assign this via input or route
  protected task: Task = {
    name: '',
    due: new Date(),
    description: '',
    complete: false
  };

  protected onUpdate(): void {
    if (!this.taskId) {
      console.error('Task ID is missing.');
      return;
    }

    this.taskService.updateTask(this.taskId, this.task);
  }
}
