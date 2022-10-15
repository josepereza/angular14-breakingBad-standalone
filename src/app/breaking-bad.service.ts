import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreakingBadService {

  constructor(public http:HttpClient) { 


  }
  prueba:string="hola mundillo"

getPersonajes(){
  return this.http.get('https://www.breakingbadapi.com/api/characters')
}
}
