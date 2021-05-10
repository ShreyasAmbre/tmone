import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  selected_team:string = ""

  constructor(private afDB:AngularFireDatabase, private router:Router ) { }

  ngOnInit() {
  }

  addTeam(data){
    console.log(data)
    this.afDB.object("teams/" + this.selected_team).set(data).then((res)=> {
      console.log(res)
      this.router.navigateByUrl("/dashboard");
    }).catch(e=> {
      console.log(e)
    })
    data.resetForm()
  }

}
