import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    /*{
      title: 'Home',
      url: '/home',
      icon: 'home'
    },*/
      {
          title: 'My Teams',
          url: '/my-teams',
          icon: 'home'
      },
    {
      title: 'Tournaments',
      url: '/tournaments',
      icon: 'list'
    },
      {
          title: 'Vibration',
          url: '/vibration',
          icon: 'phone-portrait'
      }, {
          title: 'Geo Location',
          url: '/geo-location',
          icon: 'locate'
      },
      {
          title: 'Notification',
          url: '/notifications',
          icon: 'notifications'
      },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
