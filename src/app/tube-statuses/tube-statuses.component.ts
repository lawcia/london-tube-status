import { Component, OnInit } from '@angular/core';
import { TubeService } from '../tube.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tube-statuses',
  templateUrl: './tube-statuses.component.html',
  styleUrls: ['./tube-statuses.component.css']
})
export class TubeStatusesComponent implements OnInit {

  ngOnInit(): void {
    this.getTubeStatuses();
  }

  statuses$: Observable<Object>;
  showMessage: boolean = false;
  selectedId: string;

  constructor(private tubeService: TubeService){}

  getTubeStatuses(): void {
    this.statuses$ = this.tubeService.getTubeStatuses();
  }

  toggleMessage(status): void {
    if(status.lineStatuses[0].hasOwnProperty('disruption')){
      this.showMessage = !this.showMessage;
      this.selectedId = status.id;
    }
  }
}
