import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventoService } from '../evento.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  angForm: FormGroup;

  constructor(private fb: FormBuilder, private es: EventoService) {
    this.setarFormulario();
   }

   setarFormulario() {
    this.angForm = this.fb.group({
      DATA_OCORRENCIA_EVENTO: ['', Validators.required ],
      TIPO_ENTRADA: ['', Validators.required ],
      CAUSA_EVENTO: ['', Validators.required ],
      NOME_EVENTO: ['', Validators.required ],
      DESCRICAO_EVENTO: ['', Validators.required ]
    });
  }

   addEvento(form) {
      console.log(form.value);
      console.log("teeste");
      // this.es.addEvento(
      //    DATA_OCORRENCIA_EVENTO,
      //    TIPO_ENTRADA,
      //    CAUSA_EVENTO, 
      //    NOME_EVENTO, 
      //    DESCRICAO_EVENTO
      //   );
    }

  ngOnInit() {
  }

}
