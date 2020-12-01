import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course, Filter} from '../show-case.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-show-case-filter',
  templateUrl: './show-case-filter.component.html',
  styleUrls: ['./show-case-filter.component.css']
})
export class ShowCaseFilterComponent implements OnInit {
  subjectFilter$: Observable<string[]>;
  genreFilter$: Observable<string []>;
  gradeFilter = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
  @Input() filter: Filter = {subject: '', query: '', grade: '', genre: ''};
  @Input() items$: Observable<Course[]>;
  @Output() filterChange = new EventEmitter<Filter>();

  constructor() {
  }

  ngOnInit(): void {
    this.subjectFilter$ = this.items$.pipe(map(data => data.map(item => item.subject)));
    this.genreFilter$ = this.items$.pipe(map(data => data.map(item => item.genre)));
  }

  onFilterChange(): void {
    this.filterChange.emit(this.filter);
  }

  removeDubs(arr: string[]): string [] {
    const res: string [] = [];
    if (arr === null) {
      return res;
    }
    arr.forEach(s => {
      if (res.indexOf(s) < 0) {
        res.push(s);
      }
    });
    return res;
  }
}

