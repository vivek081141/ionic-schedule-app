import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {Tournament} from '../models/Tournament';
import {DataProviderService} from '../providers/data-provider.service';
import {Team} from '../models/Team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {
    teams: Team[] = [];
    tournamentName: string;

    constructor(private router: Router, private activatedRoute: ActivatedRoute, private dataService: DataProviderService) {
      /*
      This was used when entire state of Team was passed by navigation
      */
      this.activatedRoute.queryParams.subscribe(params => {
          if (this.router.getCurrentNavigation().extras.state) {
              if (this.router.getCurrentNavigation().extras.state.tournament) {
                  this.tournamentName = this.router.getCurrentNavigation().extras.state.tournament.name;
                  const id = this.router.getCurrentNavigation().extras.state.tournament.id;
                  this.dataService.getTeams(id).subscribe(
                      (resp: Team[]) => {
                          this.teams = resp;
                          console.log(this.teams);
                      });
              }
          }
      });

        /*this.activatedRoute.paramMap.subscribe( params => {
            console.log(params.get('id')) ;
            this.tournamentName = params.get('tournamentName')

            this.dataService.getTeams(params.get('id')).subscribe(
                (resp: Team[]) => {
                this.team = resp;
                console.log(this.team);
            });
        });*/
    }

  ngOnInit() {
  }

  goToTeamDetailPage($event, team) {
    console.log('Selected Team ' + team);
    const navigationExtras: NavigationExtras = {
          state: {
              team
          }};
    if (team !== null) {
          // this.router.navigateByUrl('/teams/' + team.id);
          this.router.navigate(['team-detail'], navigationExtras);
      }
    }

    getBackButtonText() {
        return 'Back';
    }
}
