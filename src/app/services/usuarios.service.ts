import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators'
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }
  
  getUsuarios(){

    let params = new HttpParams().append('page', '2')
    params = params.append('nombre','Jorge Eugenio')
    
    // const headers = new HttpHeaders({
    //   'token-usuario': 'ABCDfasdfasdfwerqwe5f46asd5as4d5d64'
    // })

    return this.http.get('https:/reqres.in/api/users/asdfsdf',{
      params,

    }).pipe(

      map(resp => resp['data']),
      catchError(this.manejarError)
    )
  }
  manejarError(error: HttpErrorResponse){
    console.log('ocurrio un error');
    console.log(error);
    
    return throwError('Error personalizado')
  }

}
