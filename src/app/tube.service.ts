import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TubeService {

    private tubeStatusUrl: string = 'https://api.tfl.gov.uk/Line/Mode/tube/Status';

    constructor(private http: HttpClient){}

    getTubeStatuses(): Observable<Object> {
        return this.http.get(this.tubeStatusUrl);
    }

    getTubeStatus(id: string): Observable<Object> {
        const url = `https://api.tfl.gov.uk/Line/${id}/Status`;
        return this.http.get(url);
    }

}