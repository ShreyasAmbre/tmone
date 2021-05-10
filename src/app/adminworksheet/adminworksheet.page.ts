import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';


@Component({
  selector: 'app-adminworksheet',
  templateUrl: './adminworksheet.page.html',
  styleUrls: ['./adminworksheet.page.scss'],
})
export class AdminworksheetPage implements OnInit {
  teams = []


  constructor(private afDB:AngularFireDatabase,) { }

  ngOnInit() {
    this.getAllTeams()
  }

  getAllTeams(){
    this.afDB.list('teams/').valueChanges().subscribe(data => {
      this.teams = data
      console.log(this.teams, "TEAMS DATA FROM FIREBASE")
      // console.log(Object.keys(this.teams[0]), "KEYS")
      // this.teams.forEach(item => {
      //   let a = Object.keys(item)

      //   this.UsersArray.push(a);
      // })
      // console.log(this.UsersArray, "USER ARRAY KEY")
    })
  }
}
