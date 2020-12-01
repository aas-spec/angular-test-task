import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Course, ShowCaseService} from '../shared/show-case.service';

@Component({
  selector: 'app-show-case',
  templateUrl: './show-case.component.html',
  styleUrls: ['./show-case.component.css']
})
export class ShowCaseComponent implements OnInit {
  items$: Observable <Course[]>;
  constructor(private showCaseService: ShowCaseService) { }
  ngOnInit(): void {
    this.items$  = this.showCaseService.getItems();
  }

}
