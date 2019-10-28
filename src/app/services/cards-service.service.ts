import { Injectable } from '@angular/core';
import {AppLabelsService} from './app-labels.service'
@Injectable({
  providedIn: 'root'
})
export class CardsService {
  meetingRooms = [
    "Nalanda",
    "Aravali",
    "Zanskar",
    "Kashi",
    "Purvanchal",
    "Shivalink",
    "Vindhya",
    "Himalayas"
  ];
  departmentsArray:Array<string>;
  searchText:string = '';
  selectedDept = this.appLabels.allDept;
  constructor(public appLabels:AppLabelsService) {
    this.departmentsArray = [this.appLabels.allDept,this.appLabels.uiDept,this.appLabels.backendDept,this.appLabels.testDept,this.appLabels.devOpsDept];
  }
}
