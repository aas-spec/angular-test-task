import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ShowCaseFilterComponent} from './show-case-filter.component';

describe('ShowCaseFilterComponent', () => {
  let component: ShowCaseFilterComponent;
  let fixture: ComponentFixture<ShowCaseFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowCaseFilterComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCaseFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
