import { Component, OnInit } from '@angular/core';
import {LocalNotifications} from '@ionic-native/local-notifications';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  result = {};

  constructor() {
    LocalNotifications.on('click', notification => {
      const data = JSON.parse(notification.data);
      this.result = data.name ;
      alert(`Notifications Received! (${data.name})`);
    });
  }

  ngOnInit() {
  }

  setNotification() {
    LocalNotifications.schedule({
        id: 1,
        title: 'Notification',
        text: 'This is a reminder for tomorrow meeting.',
        data: {
          id: 21,
            name: 'Cool Notification'
        }
    });
  }

}
