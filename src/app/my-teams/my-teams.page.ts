import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-teams',
  templateUrl: './my-teams.page.html',
  styleUrls: ['./my-teams.page.scss'],
})
export class MyTeamsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  goToTournaments() {
    console.log('Tournaments');
    this.router.navigateByUrl('/tournaments');
  }
}
