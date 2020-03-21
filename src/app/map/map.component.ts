import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { TubeService } from '../tube.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private map: any;
  private layerGroup: any;
  private latlong: any[];
  private selectedLine: string;
  private polyline: any;
  private tubeColours: object = {
    'bakerloo': 'rgb(178, 99, 0)',
    'central': 'rgb(220,36,31)',
    'circle': 'rgb(255,211,41)',
    'district': 'rgb(0,125,50)',
    'hammersmith-city': 'rgb(244,169,190)',
    'jubilee': 'rgb(161,165,167)',
    'metropolitan': 'rgb(155,0,88)',
    'northern': 'rgb(0, 0, 0)',
    'piccadilly': 'rgb(0, 25, 168)',
    'victoria': 'rgb(0, 152, 216)',
    'waterloo-city': 'rgb(147,206,186)'
  }

  constructor(private tubeService: TubeService) {
    tubeService.lineData$
    .subscribe(lineData => this.formatLatLong(lineData),
     err => console.log(err))
   }

  ngOnInit(): void {
          this.initMap();
  }

    initMap(): void {
    this.map = L.map('mapid').setView([51.505, -0.09], 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibGF3Y2FrZSIsImEiOiJjazZnb3c3enUwOTg1M2pwOHJmcXNjdnNyIn0.2R2s_StXtwU8C8jDiQAXnA'
    }).addTo(this.map);
    this.layerGroup = L.layerGroup().addTo(this.map);
  }

  draw(): void {
    try{
     this.layerGroup.clearLayers();
     this.layerGroup = L.layerGroup().addTo(this.map);
     this.polyline = L.polyline(this.latlong, {
      color: this.tubeColours[this.selectedLine],
      weight: 4,
      opacity: 1,
      smoothFactor: 1
     }).addTo(this.layerGroup);
    this.map.fitBounds(this.polyline.getBounds())
    }catch(err){
      console.log(err)
    }
  }

  formatLatLong(lineData: object): void {
    try{
      //this.selectedLine = JSON.parse(lineData['lineStrings'])[0];
      //console.log(JSON.parse(lineData['lineStrings']))
      this.selectedLine = lineData['lineId'];
      this.latlong = lineData['lineStrings'].map((section) => { 
        let sectionArray = JSON.parse(section)
        return sectionArray[0].map((coord) => [coord[1], coord[0]])
      })
      console.log(this.latlong)
      //this.latlong = this.selectedLine.map((co) => [co[1],co[0]]);
      this.draw()
     }catch(err){
       console.log(err)
     }
  }



}
