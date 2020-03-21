import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject} from 'rxjs';

@Injectable()
export class TubeService {
    private lineData = new BehaviorSubject<any>(null);
    public lineData$ = this.lineData.asObservable();
    private tubeStatusUrl: string = 'https://api.tfl.gov.uk/Line/Mode/tube/Status';
    private routeUrl: string;
    private statusUrl: string;

    constructor(private http: HttpClient){}

    getTubeStatuses(): Observable<Object> {
        return this.http.get(this.tubeStatusUrl);
    }

    getTubeLineString(lineId: string): Observable<object>{
        this.routeUrl = `https://api.tfl.gov.uk/Line/${lineId}/Route/Sequence/inbound`;
        return this.http.get(this.routeUrl);
    }

    getTubeStatus(id: string): Observable<Object> {
        this.statusUrl = `https://api.tfl.gov.uk/Line/${id}/Status`;
        return this.http.get(this.statusUrl);
    }

    setLineData(lineData){
        this.lineData.next(lineData);
    }

}