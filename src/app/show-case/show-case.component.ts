import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ShowCaseService} from './show-case.service';
import {Course, Filter} from './show-case.model';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-show-case',
  templateUrl: './show-case.component.html',
  styleUrls: ['./show-case.component.css']
})
export class ShowCaseComponent implements OnInit {
  bonusSelected = false;
  items$: Observable <Course[]>;
  viewItems$: Observable<Course[]>;
  filter: Filter = {subject: '', query: '', grade: '', genre: ''};

  constructor(private showCaseService: ShowCaseService) { }
  ngOnInit(): void {
    this.showCaseService.getItems();
    this.items$ = this.showCaseService.items$;
    this.fillViewItems();
  }

  fillViewItems(): void {
    this.viewItems$ = this.items$.pipe(map(data => {
      return data.filter(item => {
        let accept = true;
        if (accept && this.filter.subject !== '') {
          accept = this.filter.subject === item.subject;
        }
        if (accept && this.filter.genre !== '') {
          accept = this.filter.genre === item.genre;
        }
        if (accept && this.filter.grade !== '') {
          accept = item.grade.split(';').indexOf(this.filter.grade) >= 0;
        }
        if (accept && this.filter.query !== '') {
          // tslint:disable-next-line:forin
          for (const courseKey in item) {
            const val = item[courseKey];
            const s = (typeof (val) === 'string') ? val : val.toString();
            accept = (s.toLowerCase().indexOf(this.filter.query.toLowerCase()) >= 0);
            if (accept) {
              break;
            }
          }
        }
        return accept;
      });
    }));
  }

  setFilter($event: Filter): void {
    this.filter = $event;
    this.fillViewItems();
  }
}
