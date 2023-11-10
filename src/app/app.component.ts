import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from './task';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    // inne importy
  ],
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
  ];

  constructor() {
    setTimeout( () => {
      this.config = {
        title: 'Lista zadań',
        footer: '© Lista zadań zbudowana w Angularze.',
        date: new Date(),
      };
    }, 500);
  }
}
