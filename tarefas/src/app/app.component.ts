import { Component, OnInit } from '@angular/core';
import { Tarefas } from './tabela/interfaces/tarefa.inteface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  tarefas: Tarefas[] = [
    {
      nome: 'tarefa1',
      data: new Date('01-17-2023')
    },
    {
      nome: 'tarefa2',
      data: new Date('01-18-2023')
    }
  ]

  constructor() {}

  ngOnInit(): void {
  }

  deleteTarefa(index: any) {
    this.tarefas.splice(index, 1);
  }
  
}
