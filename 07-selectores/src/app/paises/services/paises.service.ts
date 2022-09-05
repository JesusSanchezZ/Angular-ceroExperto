import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';

import { Pais, PaisSmall, PaisSmall1, RegionBloc } from '../interfaces/regiones.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private baseUrl: string = 'https://restcountries.com/v2';
  private _regiones: RegionBloc[] = [
    {nombre: 'Arab League', valor: 'AL' },
    {nombre: 'Association of Southeast Asian Nations', valor:'ASEAN'},
    {nombre: 'African Union', valor:'AU'},
    {nombre: 'Central American Integration System', valor: 'CAIS'},
    {nombre: 'Caribbean Community', valor: 'CARICOM'},
    {nombre: 'Central European Free Trade Agreement', valor: 'CEFTA'},
    {nombre: 'Eurasian Economic Union', valor: 'EEU'},
    {nombre: 'European Free Trade Association', valor: 'EFTA'},
    {nombre: 'European Union', valor: 'EU'},
    {nombre: 'North American Free Trade Agreement', valor: 'NAFTA'},
    {nombre: 'Pacific Alliance', valor: 'PA'},
    {nombre: 'South Asian Association for Regional Cooperation', valor: 'SAARC'},
    {nombre: 'Union of South American Nations', valor: 'USAN'},
  ];

  get regiones(): RegionBloc[] {
    //console.log(this._regiones);
    return [...this._regiones];
  }

  constructor(private http: HttpClient) { }

  getPaisesPorRegion( region: string): Observable<PaisSmall[]> {
    return this.http.get<PaisSmall[]>(`${this.baseUrl}/regionalbloc/${region}?fields=name,alpha3Code`)
  }

  getPaisPorCodigoSmall( codigo:string ): Observable<PaisSmall1>{

    return this.http.get<PaisSmall1>(`https://restcountries.com/v3.1/alpha/${codigo}?fields=name,cca3`);
  }

  getPaisPorCodigo( codigo:string ): Observable<Pais[] | null>{
    if(!codigo) {
      return of(null);
    }
    return this.http.get<Pais[]>(`https://restcountries.com/v3.1/alpha/${codigo}`);
  }

  getPaisesPorCodigos( borders: string[]): Observable<PaisSmall1[]>{
    if( !borders ){
      return of([]);
    }

    const peticiones: Observable<PaisSmall1>[] = [];

    borders.forEach( codigo => {
      const peticion = this.getPaisPorCodigoSmall(codigo);
      peticiones.push( peticion );
    });

    // Dispara peticiones de manera simultanea
    return combineLatest( peticiones );
  }
}
