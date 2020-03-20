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

  constructor(private tubeService: TubeService){}

  getTubeStatuses() {
    this.statuses$ = this.tubeService.getTubeStatuses();
  }

}
