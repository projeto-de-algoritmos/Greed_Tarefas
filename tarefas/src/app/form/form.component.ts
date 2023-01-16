import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  nome: any = '';

  constructor(private dateAdapter: DateAdapter<any>) { }

  ngOnInit(): void {
    this.dateAdapter.setLocale('pt-br');
  }

}
