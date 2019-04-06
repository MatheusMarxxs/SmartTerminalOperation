import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavioService } from '../navio.service';

@Component({
  selector: 'app-navio',
  templateUrl: './navio.component.html',
  styleUrls: ['./navio.component.css']
})
export class NavioComponent implements OnInit {

  angForm: FormGroup;

  constructor(private fb: FormBuilder, private ns: NavioService) {
    this.setarFormulario();
   }

   setarFormulario() {
     this.angForm = this.fb.group({
      BERTH_WINDOW: ['', Validators.required ],
      CHEGADA_BARRA: ['', Validators.required ],
      PREVISAO_ATRACACAO: ['', Validators.required ],
      ESCA_DTHR_ATRACACAO: ['', Validators.required ],
      INICIO_OPERACAO: ['', Validators.required ],
      FIM_OPERCACAO: ['', Validators.required ],
      DESATRACACAO: ['', Validators.required ],
      NAVI_NOME: ['', Validators.required ],
      HINA_QTDE_TOTAL_MOV: ['', Validators.required ],
      HINA_CMPH: ['', Validators.required ],
      SERVICO: ['', Validators.required ],
      LINER: ['', Validators.required ]
     });
   }

   addNavio(
    BERTH_WINDOW,
    CHEGADA_BARRA,
    PREVISAO_ATRACACAO, 
    ESCA_DTHR_ATRACACAO, 
    INICIO_OPERACAO, 
    FIM_OPERCACAO,
    DESATRACACAO,
    NAVI_NOME,
    HINA_QTDE_TOTAL_MOV,
    HINA_CMPH,
    SERVICO,
    LINER
    ) {
      this.ns.addNavio(
        BERTH_WINDOW,
        CHEGADA_BARRA,
        PREVISAO_ATRACACAO, 
        ESCA_DTHR_ATRACACAO, 
        INICIO_OPERACAO, 
        FIM_OPERCACAO,
        DESATRACACAO,
        NAVI_NOME,
        HINA_QTDE_TOTAL_MOV,
        HINA_CMPH,
        SERVICO,
        LINER
        );
    }

  ngOnInit() {
  }

}
