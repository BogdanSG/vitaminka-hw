import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit {

  lat: number;
  lng: number;
  zoom: number;

  constructor() {

    this.lat = 48.017694;
    this.lng = 37.805154;
    this.zoom = 15;

  }//constructor

  ngOnInit() {

  }//ngOnInit

}//GoogleMapsComponent
