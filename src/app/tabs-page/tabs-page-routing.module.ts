import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPagePage } from './tabs-page.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPagePage,
        children: [

          /*  {
                path: 'map',
                loadChildren: () => import('../tournaments/tournaments.module').then( m => m.TournamentsPageModule)
            },*/
            {
                path: 'schedule',
                children: [
                    {
                        path: '',
                        loadChildren: '../schedule/schedule.module#ScheduleModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/app/tabs/schedule',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPagePageRoutingModule {}
