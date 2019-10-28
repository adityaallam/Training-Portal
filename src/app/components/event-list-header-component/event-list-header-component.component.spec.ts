import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListHeaderComponentComponent } from './event-list-header-component.component';

describe('EventListHeaderComponentComponent', () => {
  let component: EventListHeaderComponentComponent;
  let fixture: ComponentFixture<EventListHeaderComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventListHeaderComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
