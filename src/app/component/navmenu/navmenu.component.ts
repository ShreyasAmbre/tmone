import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.scss'],
})
export class NavmenuComponent implements OnInit {
  navigate: any;

  constructor(public router:Router) { }

  ngOnInit() {
    this.sideMenu();
  }

  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Dashboard",
        url   : "/dashboard",
        icon  : "bar-chart-outline"
      },
      {
        title : "Team",
        url   : "/adminteam",
        icon  : "people-outline"
      },
      {
        title : "Task",
        url   : "/admintask",
        icon  : "list-outline"
      },
      {
        title : "Request",
        url   : "/admimrequest",
        icon  : "git-pull-request-outline"
      },
      {
        title : "Work Report",
        url   : "/admindailyworkreport",
        icon  : "stats-chart-outline"
      },
      {
        title : "Worksheet",
        url   : "/adminworksheet",
        icon  : "document-text-outline"
      },
      {
        title : "Logout",
        url   : "/",
        icon  : "log-out-outline"
      },
    ]
  }
}

