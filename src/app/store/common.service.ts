import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { forkJoin, Observable,of, switchMap } from 'rxjs';
import { ParserInfo } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private httpClient = inject(HttpClient);
  private fileNames = ["BenQ SC3211", "Dell ZT60", "Haier LE39B50", "LG 50LA621Y", "Mag RD24L",
  "Normande ND3276", "Panasonic TH-L32B6", "Philips 55PFL6008", "Philips 226V4LSB", "Samsung UA46F6400", "Sharp LC50LE450M", "Samsung UA55F6400", "Sony KDL50W656"];
 
  getList(): Observable<ParserInfo[]> {

    return of(this.fileNames).pipe(
      switchMap(entryResult => forkJoin(
        entryResult.map(name => {
          console.log(name);
         return  this.httpClient.get<ParserInfo>(`/assets/JSONmonitors/${name}.json`)
        }
        ))
      )
    )
  }
}
