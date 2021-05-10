import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {DatastoreService} from '../datastore.service'

@Component({
  selector: 'app-admintask',
  templateUrl: './admintask.page.html',
  styleUrls: ['./admintask.page.scss'],
})
export class AdmintaskPage implements OnInit {
  teams = []

  constructor(private afDB:AngularFireDatabase, private datastoreservice:DatastoreService) { }

  ngOnInit() {
    this.getAllTeams()
  }

  getAllTeams(){
    this.afDB.list('teams/').valueChanges().subscribe(data => {
      this.teams = data
      console.log(this.teams, "TEAMS DATA FROM FIREBASE")
    })
  }

  sendTeamName(selected_team){
    this.datastoreservice.selected_team = selected_team
    console.log(this.datastoreservice.selected_team, "TEAM NAME FROM SERVICE")
  }

}
