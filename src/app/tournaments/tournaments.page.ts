import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {DataProviderService} from '../providers/data-provider.service';
import {Tournament} from '../models/Tournament';
import {LoadingController} from '@ionic/angular';
import loader from '@angular-devkit/build-angular/src/angular-cli-files/plugins/single-test-transform';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.page.html',
  styleUrls: ['./tournaments.page.scss'],
})
export class TournamentsPage implements OnInit {

  public tournaments: Tournament[] = [];
 // public tournamentArray: Array<{id: string, name: string}> = [];

  constructor(private router: Router, private dataService: DataProviderService, public loadingController: LoadingController) { }


  // the loader function will not work on ngInit or Construnctor, let the page render and then fire the data lets say on button click and not change the view
  ngOnInit() {
      this.loadingController.create({
          message: 'Loading..'
      }).then((loadingElement) => {
          loadingElement.present();
          this.dataService.getTournament().subscribe(
              (resp: Tournament[]) => {
                  this.tournaments = resp;
                  console.log(this.tournaments);

          });

          this.loadingController.dismiss();

      });
  }

/*    async presentLoading() {
        const loading = await this.loadingController.create({
            message: 'Loading..',
            duration: 2000
        });
        await loading.present();

        const { role, data } = await loading.onDidDismiss();

        console.log('Loading dismissed!');
    }*/



  goToTeamsPage($event, tournament) {
      const navigationExtras: NavigationExtras = {
          state: {
              tournament
          }};
      if (tournament !== null) {
          // this.router.navigateByUrl('/teams/' + team.id);
          this.router.navigate(['teams'], navigationExtras);
      }
  }



  /**
   ionViewWillEnter	Fired when the component routing to is about to animate into view.
   ionViewDidEnter	Fired when the component routing to has finished animating.
   ionViewWillLeave	Fired when the component routing from is about to animate.
   ionViewDidLeave	Fired when the component routing to has finished animating.
   **/

  ionViewWillEnter() {
      console.log('ionViewWillEnter');
  }

    ionViewDidEnter() {
      console.log('ionViewDidEnter');
  }

    ionViewWillLeave() {
      console.log('ionViewWillLeave');
  }

    ionViewDidLeave() {
      console.log('ionViewDidLeave');
  }
}
