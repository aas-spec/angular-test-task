import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/operators';
import {Course} from './show-case.model';

export interface CourseResponse {
  items: Course[];
  result: string;
  errorMessage: string;
}


@Injectable({
  providedIn: 'root'
})

export class ShowCaseService {
//  private readonly apiUrl = '/api/mobilev1/update';
  private readonly apiUrl = 'https://krapipl.imumk.ru:8443/api/mobilev1/update';
  private storedItems: Course [] = [];
  private itemsSubj = new BehaviorSubject<Course[]>(this.storedItems);
  items$ = this.itemsSubj.asObservable();

  constructor(private http: HttpClient) {
  }

  getItems(): void {
    this.http.post <CourseResponse>(this.apiUrl, {})
      .pipe(map(resp => resp.items)).toPromise().then(data => {
      this.storedItems = data;
      this.itemsSubj.next(this.storedItems);
    });
  }

}
