import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CardModel } from '../../models/card-model';
import { CardsService } from '../../services/cards-service.service';
import { } from '../../../../node_modules/protractor';
@Component({
  selector: 'event-add-component',
  templateUrl: './event-add-component.component.html',
  styleUrls: ['./event-add-component.component.css']
})
export class EventAddComponent implements OnInit {

  @Input() cardObj: CardModel;
  @Output() addCard: EventEmitter<CardModel> = new EventEmitter();
  @Output() closeEvent: EventEmitter<any> = new EventEmitter();
  olderDateCondition: boolean;

  constructor(public cardsService: CardsService) {
  }
  ngOnChanges() {
    if(this.cardObj && this.cardObj.dateAndTime){
      this.validateForErrorDate(this.cardObj.dateAndTime);
    }
  }
  ngOnInit() {

  }
  validateForErrorDate(selectedDateAndTime: Date) {
    if(selectedDateAndTime.getTime == undefined || selectedDateAndTime.getTime == null){
       selectedDateAndTime = this.returnDateObj(selectedDateAndTime);
    }
    if (selectedDateAndTime.getTime() < (new Date()).getTime()) {
      this.olderDateCondition = true;
    } else {
      this.olderDateCondition = false;
    }

  }
  addOrEdit() {
    this.addCard.emit(JSON.parse(JSON.stringify(this.cardObj)));
  }
  hideComponent() {
    this.closeEvent.emit();
  }
  returnDateObj(dateString) {
    return new Date(dateString);
  }

}
