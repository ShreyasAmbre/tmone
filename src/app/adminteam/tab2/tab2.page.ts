import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';


@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  teams = []
  // UsersArray = []

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
