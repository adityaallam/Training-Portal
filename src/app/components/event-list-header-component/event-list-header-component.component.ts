import { Component, OnInit } from '@angular/core';
import{AppLabelsService} from '../../services/app-labels.service';
import{CardsService} from '../../services/cards-service.service';
@Component({
  selector: 'event-list-header-component',
  templateUrl: './event-list-header-component.component.html',
  styleUrls: ['./event-list-header-component.component.css']
})
export class EventListHeaderComponent implements OnInit {


  departmentsArray:Array<string>;

  constructor(public appLabels:AppLabelsService, public cardsService:CardsService) {
    this.departmentsArray = this.cardsService.departmentsArray ;
  }

  ngOnInit() {
  }

}
