import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCardsHolderComponentComponent } from './event-cards-holder-component.component';

describe('EventCardsHolderComponentComponent', () => {
  let component: EventCardsHolderComponentComponent;
  let fixture: ComponentFixture<EventCardsHolderComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCardsHolderComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCardsHolderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
