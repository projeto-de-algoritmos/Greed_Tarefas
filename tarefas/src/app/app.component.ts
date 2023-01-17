import { Component, OnInit } from '@angular/core';
import { Tarefa } from './interfaces/tarefa.inteface';

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
      data: new Date('01-17-2023'),
      atraso: 0
    },
    {
      nome: 'tarefa2',
      duracao: 5,
      data: new Date('01-18-2023'),
      atraso: 0
    }
  ]

  constructor() {}

  ngOnInit(): void {
  }

  adicionaTarefa(tarefa: Tarefa){
    this.tarefas.push(tarefa)
    this.minimizarAtraso();
  }

  deletaTarefa(index: any) {
    this.tarefas.splice(index, 1);
  }

  recalcular(){
    console.log('recalcular');
    this.minimizarAtraso();
  }
  
  minimizarAtraso(){
    this.tarefas.sort((a: Tarefa, b: Tarefa)=> a.data.valueOf() - b.data.valueOf());

    let dataTermino = new Date();
    for (const tarefa of this.tarefas) {
      dataTermino = new Date(dataTermino.getTime() + tarefa.duracao*3600000);
      tarefa.atraso = 0;
      if (dataTermino > tarefa.data) {
        tarefa.atraso = parseInt(((dataTermino.getTime() - tarefa.data.getTime())/3600000).toString());
      }
    }
  }
}
