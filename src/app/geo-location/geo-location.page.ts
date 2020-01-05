import { Component, OnInit } from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation';

@Component({
  selector: 'app-geo-location',
  templateUrl: './geo-location.page.html',
  styleUrls: ['./geo-location.page.scss'],
})
export class GeoLocationPage implements OnInit {
  location = {};

  constructor() { }

  ngOnInit() {
  }

    getGeoLocation() {
      Geolocation.getCurrentPosition().then((resp) => {
        this.location = {
          lng: resp.coords.longitude,
          lat: resp.coords.latitude
        };
      });
    }
}
