import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../shared/show-case.service';

@Component({
  selector: 'app-show-case-card',
  templateUrl: './show-case-card.component.html',
  styleUrls: ['./show-case-card.component.css']
})
export class ShowCaseCardComponent implements OnInit {
  @Input() item: Course;
  constructor() { }

  ngOnInit(): void {
  }

}
