import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListComponentComponent } from './event-list-component.component';

describe('EventListComponentComponent', () => {
  let component: EventListComponentComponent;
  let fixture: ComponentFixture<EventListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
