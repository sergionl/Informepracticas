import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


import {Inventario} from 'src/app/01Models/inventario'
import {Tienda} from 'src/app/01Models/tienda'
import {User,loginForm} from 'src/app/01Models/user'

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  constructor(private http: HttpClient) { }


  //tienda   :Observable<[Tienda]>
  getTiendas(){
    return this.http.get<any>(`http://localhost:8000/api/tienda/`)
    //.pipe(catchError((e) => throwError(e)));
  }
  //inventario
  getInventario(id:number): Observable<Inventario[]>{
    return this.http.get<Inventario[]>(`http://localhost:8000/api/inventario/Inventario_get_with_fk/?u_id=${id}`)
    .pipe(catchError((e) => throwError(e)));
  }

  editInventario(id:number, inventario:Inventario){
    return this.http.put<any>(`http://localhost:8000/api/inventario/${id}/`,inventario)
    .pipe(catchError((e) => throwError(e)));
  }

  //login
  login(user: loginForm): Observable<any>{
    return this.http.post<any>(`http://localhost:8000/api/user/login/`,user)
    .pipe(catchError((e) => throwError(e)));
  }
}
