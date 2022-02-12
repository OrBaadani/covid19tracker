import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CovidService {
  constructor(private http: HttpClient) {}
  public getDataGlobal() {
    const headers = new HttpHeaders({
      'x-rapidapi-host':
        'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
      'x-rapidapi-key': '1a3ae5f8c7mshca195e0c712f629p1ce1e3jsnd766a7947fa2',
    });

    // let params = new HttpParams().set('code', countryCode);

    return this.http
      .get<{ answer: string }>(
        'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/world',
        {
          headers,
          // params,
        }
      )
      .pipe(map((res) => res));
  }
  public getData(countryCode: string) {
    const headers = new HttpHeaders({
      'x-rapidapi-host':
        'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
      'x-rapidapi-key': '1a3ae5f8c7mshca195e0c712f629p1ce1e3jsnd766a7947fa2',
    });

    let params = new HttpParams().set('country', countryCode);

    return this.http.get<any>(
      `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/covid-ovid-data/sixmonth/${countryCode}`,
      {
        headers,
      }
    );
    // .pipe(map((res) => res));
  }
  public getData3() {
    const headers = new HttpHeaders({
      'x-rapidapi-host':
        'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
      'x-rapidapi-key': '1a3ae5f8c7mshca195e0c712f629p1ce1e3jsnd766a7947fa2',
    });

    // let params = new HttpParams().set('country', countryCode);

    return this.http.get<any>(
      'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/countries',
      {
        headers,
      }
    );
  }
  public getGlobalData(countryName: string) {
    return this.http.get<any>(
      `https://corona.lmao.ninja/v2/countries/${countryName}?yesterday=true&strict=false`
    );
  }
}

// const { data } = await axios.get(
//   'https://covid-19-data.p.rapidapi.com/country/code',
//   {
//     params: { code: 'it' },
//     headers: {
//       'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
//       'x-rapidapi-key':
//         '1a3ae5f8c7mshca195e0c712f629p1ce1e3jsnd766a7947fa2',
//     },
//   }
// );
// return data;
