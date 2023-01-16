import { Component, Input, OnInit } from '@angular/core';
import { Tarefas } from './interfaces/tarefa.inteface';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  @Input() tarefas: Tarefas[] = [
    {
      nome: 'tarefa1',
      data: new Date('17/01/2023')
    },
    {
      nome: 'tarefa2',
      data: new Date('18/01/2023')
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
