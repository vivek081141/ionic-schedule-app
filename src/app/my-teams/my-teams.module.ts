import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyTeamsPageRoutingModule } from './my-teams-routing.module';

import { MyTeamsPage } from './my-teams.page';
import {TabsPagePageModule} from '../tabs-page/tabs-page.module';
import {MapsComponent} from './maps/maps.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {AgmCoreModule} from '@agm/core';
import {AgmDirectionModule} from 'agm-direction';

@NgModule({
  imports: [
      AgmCoreModule.forRoot({apiKey: 'AIzaSyDZGu56z5KtCfeh32Zpt8DYi7wyqYipaNQ'}),
      AgmDirectionModule,
    CommonModule,
    FormsModule,
    IonicModule,
    MyTeamsPageRoutingModule,
    TabsPagePageModule
  ],
    exports: [MapsComponent],
  declarations: [MyTeamsPage, MapsComponent, AboutUsComponent]
})
export class MyTeamsPageModule {}
