import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { throwError } from 'rxjs';

// import { of } from 'rxjs/observable/of'
import { Case } from '../models/case.model';

const CASES = [
  {
    _id: '5a56640269f443a5d64b32ca',
    name: 'Ochoa Hyde',
    age: 15,
    phone: '+1 (968) 593-3824',
    status: 'Recovered',
  },
  {
    _id: '5a5664025f6ae9aa24a99fde',
    name: 'Hallie Mclean',
    age: 72,
    phone: '+1 (948) 464-2888',
    status: 'active',
  },
  {
    _id: '5a56640252d6acddd183d319',
    name: 'Parsons Norris',
    age: 61,
    phone: '+1 (958) 502-3495',
    status: 'active',
  },
  {
    _id: '5a566402ed1cf349f0b47b4d',
    name: 'Rachel Lowe',
    age: 40,
    phone: '+1 (911) 475-2312',
    status: 'critical',
  },
  {
    _id: '5a566402abce24c6bfe4699d',
    name: 'Dominique Soto',
    age: 60,
    phone: '+1 (807) 551-3258',
    status: 'Dead',
  },
  {
    _id: '5a566402a6499c1d4da9220a',
    name: 'Shana Pope',
    age: 19,
    phone: '+1 (970) 527-3082',
    status: 'active',
  },
  {
    _id: '5a566402f90ae30e97f990db',
    name: 'Faulkner Flores',
    age: 22,
    phone: '+1 (952) 501-2678',
    status: 'Recovered',
  },
  {
    _id: '5a5664027bae84ef280ffbdf',
    name: 'Holder Bean',
    age: 82,
    phone: '+1 (989) 503-2663',
    status: 'critical ',
  },
  {
    _id: '5a566402e3b846c5f6aec652',
    name: 'Rosanne Shelton',
    age: 33,
    phone: '+1 (968) 454-3851',
    status: 'Recovered',
  },
  {
    _id: '5a56640272c7dcdf59c3d411',
    name: 'Pamela Nolan',
    age: 36,
    phone: '+1 (986) 545-2166',
    status: 'Recovered',
  },
  {
    _id: '5a5664029a8dd82a6178b15f',
    name: 'Roy Cantu',
    age: 66,
    phone: '+1 (929) 571-2295',
    status: 'Active',
  },
  {
    _id: '5a5664028c096d08eeb13a8a',
    name: 'Ollie Christian',
    age: 78,
    phone: '+1 (977) 419-3550',
    status: 'Dead',
  },
  {
    _id: '5a5664026c53582bb9ebe9d1',
    name: 'Nguyen Walls',
    age: 23,
    phone: '+1 (963) 471-3181',
    status: 'Active',
  },
  {
    _id: '5a56640298ab77236845b82b',
    name: 'Glenna Santana',
    age: 11,
    phone: '+1 (860) 467-2376',
    status: 'Recovered',
  },
  {
    _id: '5a56640208fba3e8ecb97305',
    name: 'Malone Clark',
    age: 67,
    phone: '+1 (818) 565-2557',
    status: 'Dead',
  },
  {
    _id: '5a566402abb3146207bc4ec5',
    name: 'Floyd Rutledge',
    age: 41,
    phone: '+1 (807) 597-3629',
    status: 'Recoverd',
  },
  {
    _id: '5a56640298500fead8cb1ee5',
    name: 'Grace James',
    age: 44,
    phone: '+1 (959) 525-2529',
    status: 'Active',
  },
  {
    _id: '5a56640243427b8f8445231e',
    name: 'Tanner Gates',
    age: 25,
    phone: '+1 (978) 591-2291',
    status: 'Recoverd',
  },
  {
    _id: '5a5664025c3abdad6f5e098c',
    name: 'Lilly Conner',
    age: 65,
    phone: '+1 (842) 587-3812',
    status: 'Recoverd',
  },
];

@Injectable({
  providedIn: 'root',
})
export class CaseService {
  //mock the server
  private _casesDb: Case[] = CASES;

  private _cases$ = new BehaviorSubject<Case[]>([]);
  public cases$ = this._cases$.asObservable();

  constructor() {}

  public loadCases(filterBy = null): void {
    let cases = this._casesDb;
    if (filterBy && filterBy.term) {
      console.log(filterBy);
      cases = this._filter(cases, filterBy.term);
    }
    this._cases$.next(this._sort(cases));
  }

  public getCaseById(id: string): Observable<Case> {
    //mock the server work

    const covidCase = this._casesDb.find((covidCase) => covidCase._id === id);

    //return an observable
    return of(covidCase);

    // ? of(covidCase)
    // : throwError(() => `covidCase id ${id} not found!`);
  }

  public deleteCase(id: string) {
    //mock the server work
    this._casesDb = this._casesDb.filter((covidCase) => covidCase._id !== id);

    // change the observable data in the service - let all the subscribers know
    this._cases$.next(this._casesDb);
  }

  public saveCase(covidCase: Case) {
    return covidCase._id
      ? this._updateCase(covidCase)
      : this._addCase(covidCase);
  }

  private _updateCase(covidCase: Case) {
    //mock the server work
    this._casesDb = this._casesDb.map((c) =>
      covidCase._id === c._id ? covidCase : c
    );
    // change the observable data in the service - let all the subscribers know
    this._cases$.next(this._sort(this._casesDb));
    return of(covidCase);
  }

  private _addCase(covidCase: Case) {
    //mock the server work
    const newCase = new Case(
      this._makeId(),
      covidCase.name,
      covidCase.age,
      covidCase.phone,
      covidCase.status
    );
    this._casesDb.push(newCase);
    this._cases$.next(this._sort(this._casesDb));
    return of(covidCase);
  }
  public getEmptyCase() {
    const covidCase: Case = {
      name: '',
      age: 0,
      phone: '',
      status: '',
    };
    return covidCase;
  }
  private _sort(cases: Case[]): Case[] {
    return cases.sort((a, b) => {
      if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
        return -1;
      }
      if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
        return 1;
      }

      return 0;
    });
  }

  private _filter(cases, term) {
    term = term.toLocaleLowerCase();
    return cases.filter((covidCase) => {
      return covidCase.status.toLocaleLowerCase().includes(term);
      // covidCase.phone.toLocaleLowerCase().includes(term)
      //  ||
      // covidCase.age.toLocaleLowerCase().includes(term)
    });
  }

  private _makeId(length = 5) {
    var txt = '';
    var possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
  }
}
