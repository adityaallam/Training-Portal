import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppLabelsService {

public trainingPortal = "Training Portal";
public eventsList = "Events List";
public search = "Search";
public uiDept = "UI Department";
public backendDept = "Backend Department";
public testDept = "Testing Department";
public devOpsDept = "DevOps Department";
public allDept = "All Departments";
public filterByDept = "Filter By Department:";
public searchTheEventsByEventName = "Search the events by event name";

  constructor() {





   }
}
