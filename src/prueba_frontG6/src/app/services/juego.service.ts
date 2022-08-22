import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Juego } from './juego';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  private urlEndPoint: string = "http://localhost:8088/api/juegos";

  private httpHeaders = new HttpHeaders({'Content-type' : 'application/json'});

  constructor(private http: HttpClient, private router: Router) {  }

  //obtener todo el listado de juegos y su respectivo mensaje entregado por el backend
  getJuegos(): Observable<any> {
    return this.http.get<any>(this.urlEndPoint);
  }

  getJuego(id: number): Observable<Juego> {
    return this.http.get<Juego>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        this.router.navigate([`/juegos`]);
        console.error(e.error.mensaje);
        swal(e.error.mensaje, e.error.error,'error');
        return throwError(e);
      })
    );
  }

  createJuego(juego: Juego): Observable<any> {
    return this.http.post(this.urlEndPoint, juego, {headers: this.httpHeaders}).pipe(
      map((response: any) => response.juego as Juego),
      catchError(e => {
        console.error(e.error.mensaje);
        swal(e.error.mensaje, e.error.error,'error');
        return throwError(e);
      })
    );
  }

  updateJuego(juego: Juego) : Observable<any> {
    return this.http.put<any>(`${this.urlEndPoint}/${juego.id}`, juego, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        swal(e.error.mensaje, e.error.error,'error');
        return throwError(e);
      })
    );
  }

  deleteJuego(id: number) : Observable<Juego> {
    return this.http.delete<Juego>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        swal(e.error.mensaje, e.error.error,'error');
        return throwError(e);
      })
    );
  }
  




}

