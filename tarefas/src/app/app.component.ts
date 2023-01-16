import { Component, OnInit } from '@angular/core';
import { Tarefa } from './tabela/interfaces/tarefa.inteface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  tarefas: Tarefa[] = [
    {
      nome: 'tarefa1',
      duracao: 2,
      data: new Date('01-17-2023')
    },
    {
      nome: 'tarefa2',
      duracao: 5,
      data: new Date('01-18-2023')
    }
  ]

  constructor() {}

  ngOnInit(): void {
  }

  adicionaTarefa(tarefa: Tarefa){
    this.tarefas.push(tarefa)
    
  }

  deletaTarefa(index: any) {
    this.tarefas.splice(index, 1);
  }

  recalcular(){
    console.log('recalcular');
    
  }
  
}
