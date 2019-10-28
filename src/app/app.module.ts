import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container-component/container-component.component';
import { HeaderComponent } from './components/header-component/header-component.component';
import { EventListComponent } from './components/event-list-component/event-list-component.component';
import { EventListHeaderComponent } from './components/event-list-header-component/event-list-header-component.component';
import { EventCardsHolderComponent } from './components/event-cards-holder-component/event-cards-holder-component.component';
import { EventCardComponent } from './components/event-card-component/event-card-component.component';
import { EventAddComponent } from './components/event-add-component/event-add-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    EventListComponent,
    EventListHeaderComponent,
    EventCardsHolderComponent,
    EventCardComponent,
    EventAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
