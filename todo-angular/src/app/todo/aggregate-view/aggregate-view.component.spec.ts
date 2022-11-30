import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggregateViewComponent } from './aggregate-view.component';

describe('AggregateViewComponent', () => {
  let component: AggregateViewComponent;
  let fixture: ComponentFixture<AggregateViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggregateViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AggregateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
