import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  config: { title: string | null, footer : string | null, date: Date | null, } = {title: null, footer: null, date: null}
  tasks: Task[] = [
    {
      name: 'Siłownia',
      deadline: '2023-01-02',
      done: false,
    },
    {
      name: 'Nauka angulara',
      deadline: '2023-01-02',
      done: false,
    },
    {
      name: 'sprzątanie kuwety',
      deadline: '2023-01-02',
      done: true,
    },
    {
      name: 'Siłownia',
      deadline: '2023-01-02',
      done: false,
    },
    {
      name: 'Nauka angulara',
      deadline: '2023-01-02',
      done: false,
    },
    {
      name: 'sprzątanie kuwety',
      deadline: '2023-01-02',
      done: true,
    }
  ];

  taskName: string = "";
  taskDate: string = "";

  constructor() {
    setTimeout( () => {
      this.config = {
        title: 'Lista zadań',
        footer: '© Lista zadań zbudowana w Angularze.',
        date: new Date(),
      };
    }, 500);
    this.sortTask();
  }

  createTask(){
    const task: Task = {
      name: this.taskName,
      deadline: this.taskDate,
      done: false,
    }
    this.taskName = "";
    this.taskDate = "";
    this.tasks.push(task);
    this.sortTask();
  }

  clearTasks() {
    this.tasks = [];
  }

  markTaskAsDone(task: Task){
    console.log(task)
    task.done = true;
    this.sortTask();
  }

  deleteTask(task: Task){
    this.tasks = this.tasks.filter(e => e !== task)
    this.sortTask();
  }

  private sortTask() {
    this.tasks = this.tasks.sort((a: Task, b: Task) =>
      a.done === b.done ? 0 : a.done ? 1: -1
    );
  }
}
