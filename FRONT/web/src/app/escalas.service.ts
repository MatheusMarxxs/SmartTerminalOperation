import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EscalasService {
  url = 'https://smart-terminal-api.herokuapp.com/escala';

  constructor(private http: HttpClient) { }

  listar() {
    this.http.get(this.url)
      .subscribe(res => {
        console.log(res)
        return res;
      });
  }
}
