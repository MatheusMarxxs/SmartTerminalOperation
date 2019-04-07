import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  url = 'http://localhost:4000/evento';

  constructor(private http: HttpClient) { }

  addEvento(
    DATA_OCORRENCIA_EVENTO,
    TIPO_ENTRADA, // MANUAL | AUTO
    CAUSA_EVENTO,  // NATUREZA | FALHA EQUIPAMENTO
    NOME_EVENTO,
    DESCRICAO_EVENTO
    ) {
    
      const obj = {
        DATA_OCORRENCIA_EVENTO: DATA_OCORRENCIA_EVENTO,
        TIPO_ENTRADA: TIPO_ENTRADA, 
        CAUSA_EVENTO: CAUSA_EVENTO,
        NOME_EVENTO: NOME_EVENTO,
        DESCRICAO_EVENTO: DESCRICAO_EVENTO
      }

      console.log(obj);

      this.http.post(this.url, obj)
        .subscribe(res => console.log('Done'));
  }
}
