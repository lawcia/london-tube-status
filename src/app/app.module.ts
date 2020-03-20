import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { TubeService } from './tube.service';
import { TubeStatusesComponent } from './tube-statuses/tube-statuses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TubeStatusDetailComponent } from './tube-status-detail/tube-status-detail.component';
import { MapComponent } from './map/map.component';



@NgModule({
  declarations: [
    AppComponent,
    TubeStatusesComponent,
    DashboardComponent,
    TubeStatusDetailComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
