import { Component, OnInit } from '@angular/core';
import {Vibration} from '@ionic-native/vibration';

@Component({
  selector: 'app-vibration',
  templateUrl: './vibration.page.html',
  styleUrls: ['./vibration.page.scss'],
})
export class VibrationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  vibrate() {
    Vibration.vibrate(2000);
  }

  vibratePattern() {
    Vibration.vibrate([2000, 100, 2000]);
  }
}
