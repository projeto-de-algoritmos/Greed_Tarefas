import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarefa } from './interfaces/tarefa.inteface';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  @Input() tarefas: Tarefa[] = []
  @Output() emitExcluir = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.tarefas[0].data);
  }

  delete(index:any) {
    this.emitExcluir.emit(index)
  }

}
