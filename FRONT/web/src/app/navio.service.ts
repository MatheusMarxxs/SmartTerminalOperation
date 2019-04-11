import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NavioService {

  url = 'https://smart-terminal-api.herokuapp.com/navio';

  constructor(private http: HttpClient) { }

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
    
      const obj = {
        BERTH_WINDOW: BERTH_WINDOW,
        CHEGADA_BARRA: CHEGADA_BARRA,
        PREVISAO_ATRACACAO: PREVISAO_ATRACACAO, 
        ESCA_DTHR_ATRACACAO: ESCA_DTHR_ATRACACAO, 
        INICIO_OPERACAO: INICIO_OPERACAO, 
        FIM_OPERCACAO: FIM_OPERCACAO,
        DESATRACACAO: DESATRACACAO,
        NAVI_NOME: NAVI_NOME,
        HINA_QTDE_TOTAL_MOV: HINA_QTDE_TOTAL_MOV,
        HINA_CMPH: HINA_CMPH,
        SERVICO: SERVICO,
        LINER: LINER
      }

      console.log(obj);

      this.http.post('${this.url}', obj)
        .subscribe(res => console.log('Done'));
  }
}
