import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export interface Course {
  courseId: string;
  extId: string;
  courseHash: string;
  title: string;
  grade: string;
  genre: string;
  subject: string;
  itunes_id: string;
  progress: number;
  description: string;
  status: string;
  price: string;
  shopUrl: string;
  google_id: string;
  winstore_id: string;
  isNew: boolean;
  priceBonus: number;
  lang: string;
  size: number;
  requireUpdate: boolean;
}

export interface CourseResponse {
  items: Course[];
  result: string;
  errorMessage: string;
}

@Injectable({
  providedIn: 'root'
})

export class ShowCaseService {
  private readonly apiUrl = '/api/mobilev1/update';
  constructor(private http: HttpClient) { }
  getItems(): Observable <Course[]> {
    return this.http.post <CourseResponse> ( this.apiUrl, {})
      .pipe( map( resp => resp.items));
  }

}
