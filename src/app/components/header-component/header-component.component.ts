import { Component, OnInit } from '@angular/core';
import {AppLabelsService} from '../../services/app-labels.service'

@Component({
  selector: 'header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public appLabels: AppLabelsService) { }

  ngOnInit() {
  }

}
