import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import { DatastoreService } from 'src/app/datastore.service';


@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  tasks = []
  tasks_keys = []

  constructor(private afDB:AngularFireDatabase, private datastoreservice:DatastoreService) { }

  ngOnInit() {
    this.getAllTasks()
    console.log("63636566")
  }

  getAllTasks(){
    this.afDB.list(`addedtasksfields/`).valueChanges().subscribe(data => {
      this.tasks = data
      this.tasks_keys = Object.keys(this.tasks[0])
      console.log(this.tasks_keys, "KEYSSSSSSS")
      console.log(this.tasks, "TEAMS DATA FROM FIREBASE")
    })
  }

}
