import { Component, OnInit } from '@angular/core';
declare var window:any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss'],
})
export class MapsComponent implements OnInit {

  public dir = undefined;
  public map: any = {};
  constructor() { }

  ngOnInit() {
    this.map = {
      lat: 13.013869,
      lng: 77.714456,
      zoom: 12,
    };
  }

  goToDirections() {
    console.log('Go to directions');
   // window.location = `geo:$(this.map.lat},$(this.map.lng};u=35`;
      this.dir = {
          origin: { lat: 13.013869, lng: 77.714456 },
          destination: { lat: 12.977662, lng: 77.664773}
      };
  }

}
