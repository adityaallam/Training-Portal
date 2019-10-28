import { Component, OnInit } from '@angular/core';
import { CardModel } from '../../models/card-model';
import { CardsListModel } from '../../models/cards-list-model';
import {CardsService} from '../../services/cards-service.service'
@Component({
  selector: 'event-cards-holder-component',
  templateUrl: './event-cards-holder-component.component.html',
  styleUrls: ['./event-cards-holder-component.component.css']
})
export class EventCardsHolderComponent implements OnInit {
  showCardObjComponent: boolean = false;
  cardIndexNeedToBeEdited: number = -1;
  cardDeptBeforeEditing:string = '';
  defaultCardObj: CardModel = {
    trainingName:'',
    description:'',
    department:"UI Department",
    duration:0,
    dateAndTime: new Date(),
    meetingRoom:'Nalanda'
  };
  cardsArray: CardsListModel = {
    "UI Department": [],
    "Backend Department": [],
    "Testing Department": [],
    "DevOps Department": [],
    "All Departments": []
  };
  cardObj:CardModel = undefined;
  constructor(public cardsService:CardsService) { }
  ngOnInit() {
  }
  addTheCard(card:CardModel){
    if(this.cardIndexNeedToBeEdited !== -1){
      this.cardsArray[this.cardDeptBeforeEditing].splice(this.cardIndexNeedToBeEdited,1);
      this.cardIndexNeedToBeEdited = -1;
      this.cardDeptBeforeEditing = '';
    }
    this.cardsArray[card.department].unshift(card);
    this.cardsArray["All Departments"] = [...this.cardsArray["UI Department"],...this.cardsArray["Backend Department"],...this.cardsArray["Testing Department"],...this.cardsArray["DevOps Department"]];
    this.showCardObjComponent = false;
  }
  closeEventOfTheCardComponentHandler(){
    this.cardIndexNeedToBeEdited = -1;
    this.cardDeptBeforeEditing = '';
    this.showCardObjComponent = false;
  }
  cardObjInitialisation(card:CardModel,cardIndex:number,dept:string){
     if(card != undefined && card != null){
       this.cardObj = JSON.parse(JSON.stringify(card));
       this.cardIndexNeedToBeEdited = cardIndex;
       this.cardDeptBeforeEditing = dept;
       this.showCardObjComponent = true;
     }else{
      this.cardObj = undefined;
      this.cardIndexNeedToBeEdited = -1;
      this.cardDeptBeforeEditing = "";
      this.showCardObjComponent = false;
     }
  }
}
