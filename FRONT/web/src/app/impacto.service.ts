import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImpactoService {

  url = 'http://localhost:4000/impacto';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get(this.url);
  }
}
