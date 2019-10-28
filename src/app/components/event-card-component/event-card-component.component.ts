import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {CardModel} from '../../models/card-model';
import {CardsService} from '../../services/cards-service.service'
@Component({
  selector: 'event-card-component',
  templateUrl: './event-card-component.component.html',
  styleUrls: ['./event-card-component.component.css']
})
export class EventCardComponent implements OnInit {
  @Input() cardObj:CardModel;
  @Input() indexOfTheCard;
  @Output() preEventBeforeEditingTheCard: EventEmitter<any> = new EventEmitter();
  constructor(public cardsService: CardsService) { }

  ngOnInit() {
  }
  beforeEdit(cardObj,indexOfTheCard,department){
    this.preEventBeforeEditingTheCard.emit({card:cardObj,index:indexOfTheCard,dept:department});
  }
  convertKey(key){
    if(key == "trainingName"){
      return "Training Name"
    }else if(key == "description"){
      return "Description Of the training"
    }else if(key == "department"){
      return "Department Conducting the training"
    }else if(key == "dateAndTime"){
      return "Date and Time when this training will take place"
    }else if(key == "meetingRoom"){
      return "Venu where this training going to take palce"
    }else if(key=="duration"){
      return "Duration of Training in Hours"
    }
  }
  processValue(value,key){
    if(key=="trainingName"){
        if(this.cardsService.searchText!=undefined && this.cardsService.searchText!=null && this.cardsService.searchText.toUpperCase().trim()!=''){
         var startIndex =  value.toUpperCase().indexOf(this.cardsService.searchText.toUpperCase().trim());
         var endIndex = startIndex + this.cardsService.searchText.toUpperCase().length -1;
         return  this.returnHighlightedValue(value,startIndex,endIndex);
        }
    }
    if(key=="dateAndTime"){
      return (new Date(value)).toDateString();
    }
    return value;
  }
  returnHighlightedValue(value,startIndex,endIndex){
    var template = '';
    if(startIndex != 0){
      template = template + value.substring(0,startIndex);
    }
    template = template + '<mark>'+value.substring(startIndex,endIndex+1)+'</mark>';
    if(endIndex<value.length-1){
      template = template + value.substring(endIndex+1,value.length);
    }
    return template;
  }
}
