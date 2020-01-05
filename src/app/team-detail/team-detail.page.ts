import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataProviderService} from '../providers/data-provider.service';
import {Player} from '../models/Player';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.page.html',
  styleUrls: ['./team-detail.page.scss'],
})
export class TeamDetailPage implements OnInit {

    private teamName: string;
    private players: Player[];

    constructor(private router: Router, private activatedRoute: ActivatedRoute, private dataService: DataProviderService) {
    }


  ngOnInit() {
      /*
       This was used when entire state of Team was passed by navigation
       */
      this.activatedRoute.queryParams.subscribe(params => {
          if (this.router.getCurrentNavigation().extras.state) {
              if (this.router.getCurrentNavigation().extras.state.team) {
                  this.teamName = this.router.getCurrentNavigation().extras.state.team.name;
                  const id = this.router.getCurrentNavigation().extras.state.team.id;
                  this.dataService.getTeamDetail(id).subscribe(
                      (resp: Player[]) => {
                          this.players = resp;
                          console.log(this.players);
                      });
              }
          }
      });
  }

}
