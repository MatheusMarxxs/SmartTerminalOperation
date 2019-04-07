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
    DESCRICAO_EVENTO,
    NAVIO,
    VIAGEM,
    CODIGO_EQUIPAMENTO,
    TIPO_EQUIPAMENTO
    ) {
    
      const obj = {
        DATA_OCORRENCIA_EVENTO: DATA_OCORRENCIA_EVENTO,
        TIPO_ENTRADA: TIPO_ENTRADA, 
        CAUSA_EVENTO: CAUSA_EVENTO,
        NOME_EVENTO: NOME_EVENTO,
        DESCRICAO_EVENTO: DESCRICAO_EVENTO,
        NAVIO: NAVIO,
        VIAGEM: VIAGEM,
        CODIGO_EQUIPAMENTO: CODIGO_EQUIPAMENTO,
        TIPO_EQUIPAMENTO: TIPO_EQUIPAMENTO
      }

      var retorno;

      this.http.post(this.url, obj)
        .subscribe(res => { retorno = res; });

      return retorno;
  }
}
