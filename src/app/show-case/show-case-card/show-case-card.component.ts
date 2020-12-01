import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../show-case.model';


@Component({
  selector: 'app-show-case-card',
  templateUrl: './show-case-card.component.html',
  styleUrls: ['./show-case-card.component.css']
})
export class ShowCaseCardComponent implements OnInit {
  @Input() item: Course;
  @Input() bonusSelected = false;
  constructor() { }

  ngOnInit(): void {
  }

  getGradeString(grade: string): string {
    const arr = grade.split(';');
    return (arr.length > 1) ? (arr[0] + '-' + arr[arr.length - 1] + ' классы') : (arr[0] + ' класс');
  }
}
