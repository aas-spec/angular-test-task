import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ShowCaseCardComponent} from './show-case-card.component';

describe('ShowCaseCardComponent', () => {
  let component: ShowCaseCardComponent;
  let fixture: ComponentFixture<ShowCaseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCaseCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCaseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
