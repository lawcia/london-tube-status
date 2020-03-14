import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TubeService } from '../tube.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tube-status-detail',
  templateUrl: './tube-status-detail.component.html',
  styleUrls: ['./tube-status-detail.component.css']
})
export class TubeStatusDetailComponent implements OnInit {
  status$: Observable<Object>;

  constructor(
    private route: ActivatedRoute,
    private tubeService: TubeService,
    private location: Location) { }

  ngOnInit(): void {
    this.getTubeStatus();
  }

  getTubeStatus(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.status$ = this.tubeService.getTubeStatus(id)
  }

  goBack(): void {
    this.location.back()
  }



}
