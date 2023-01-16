import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  novaTarefa!: FormGroup;

  constructor(
    private dateAdapter: DateAdapter<any>,
    private _fb: FormBuilder,
    ) { }

  @Output() emitTarefa = new EventEmitter<any>();

  ngOnInit(): void {
    this.novaTarefa = this._fb.group({
      nome: ['', Validators.required],
      data: [Validators.required]
    });
  }

  adicionar(){

    console.log(this.novaTarefa.controls['data']);
    
    if(this.novaTarefa.valid){
      let tarefa = {
        nome: this.novaTarefa.controls['nome'].value,
        data: this.novaTarefa.controls['data'].value
      }
      this.emitTarefa.emit(tarefa);
      this.novaTarefa.reset();
      Object.keys(this.novaTarefa.controls).forEach((name) => {
        let control = this.novaTarefa.controls[name];
        control.setErrors(null);
      });
    }
  }

}
