import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImpactoService {

  url = 'https://smart-terminal-api.herokuapp.com/evento/impacto';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get(this.url);
  }
}

// DATA_FINAL: "2019-04-06T00:00:00.000Z"
// DATA_FINAL_PREVISTA: "2019-04-06T00:00:00.000Z"
// DATA_INICIAL: "2019-04-06T00:00:00.000Z"
// ESCALAS_IMPACTADAS: []
// OPERADORES_IMPACTADOS: [

// <li *ngFor="let hero of heroes">
//   {{ hero }}
// </li>

// "_id": "5ca96d91606d7567604cac3a",
//     "CEP": "123",
//     "ESCALA": "26",
//     "TURMA": 15,
//     "CARGO": "Operador1"
//   }