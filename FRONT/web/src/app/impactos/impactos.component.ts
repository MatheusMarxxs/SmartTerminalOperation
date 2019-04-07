import { Component, OnInit } from '@angular/core';
import { ImpactoService } from '../impacto.service';

@Component({
  selector: 'app-impactos',
  templateUrl: './impactos.component.html',
  styleUrls: ['./impactos.component.css']
})
export class ImpactosComponent implements OnInit {

  constructor(private impactoService: ImpactoService) { }
  
  impactos: any;
  
  ngOnInit() {
    this.impactoService.listar().subscribe(res => this.impactos = res)
  }

}
