import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deadline } from '../../../types/deadline.class';
import { catchError, Observable, of } from 'rxjs';
import tempDataService from '../../../tempData/tempDataService';

@Injectable({
  providedIn: 'root'
})
export class DeadlineService {
  backendUrl = 'https://backend/server/api-endpoint';
  constructor(
    private http: HttpClient
  ) { }

  getDeadline(id: number): Observable<Deadline | null> {
    const targetUrl = `${this.backendUrl}/deadline?id=${id}`;
    return this.http.get<Deadline | null>(targetUrl).pipe(
      catchError(
        (err, caught) => {
          console.error(err); 
          // Use this during normal Operations
          // return of(null);

          // Use this in demonstration
          return id === 1 ? of(tempDataService.deadlines[0]): of(tempDataService.deadlines[1])
        }
      )
    )
  }


}
