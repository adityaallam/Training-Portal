import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCardComponentComponent } from './event-card-component.component';

describe('EventCardComponentComponent', () => {
  let component: EventCardComponentComponent;
  let fixture: ComponentFixture<EventCardComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCardComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
