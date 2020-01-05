import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {DataProviderService} from './providers/data-provider.service';
import {HttpClientModule} from '@angular/common/http';
import {AgmCoreModule} from '@agm/core';
import {SQLite} from '@ionic-native/sqlite';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
     // AgmCoreModule.forRoot({apiKey: 'AIzaSyDepERGCEG6DM56uPsKODH8yQfSLchuHoI'}),
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot({
        rippleEffect: true,
        mode: 'md' //,
       // backButtonText: 'Go Back'
    }),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
      DataProviderService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
