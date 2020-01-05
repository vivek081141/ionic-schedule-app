import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyTeamsPage } from './my-teams.page';
import {MapsComponent} from './maps/maps.component';
import {AboutUsComponent} from './about-us/about-us.component';

const routes: Routes = [
  {
    path: '',
    component: MyTeamsPage
  },
    {
        path: 'map',
        component: MapsComponent
    },
    {
        path: 'aboutUs',
        component: AboutUsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyTeamsPageRoutingModule {}
