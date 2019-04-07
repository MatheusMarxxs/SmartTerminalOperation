import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EscalasService {
  url = 'http://localhost:4000/escala';

  constructor(private http: HttpClient) { }

  listar() {
    this.http.get(this.url)
      .subscribe(res => {
        console.log(res)
        return res;
      });
  }
}
