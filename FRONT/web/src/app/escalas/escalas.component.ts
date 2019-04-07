import { Component, OnInit } from '@angular/core';
import { EscalasService } from '../escalas.service';

@Component({
  selector: 'app-escalas',
  templateUrl: './escalas.component.html',
  styleUrls: ['./escalas.component.css']
})
export class EscalasComponent implements OnInit {
  constructor(private EscalasService: EscalasService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.EscalasService.listar();
  }
}
