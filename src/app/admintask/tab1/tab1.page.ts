import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DatastoreService } from 'src/app/datastore.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  selected_task:string = ""
  tasks = []

  selected_Object;
  selected_Object_keys;
  add_fields_status = false

  farmer_details_fields = [{"Name":"text", "Contact No": "number", "Whatsapp No": "number", "Address":"text", "Landmark":"text", "District":"text", "Taluka":"text",
                          "Village":"text", "Pincode": "number"}]
                          farmer_details_fields_keys = Object.keys(this.farmer_details_fields[0]);

  gps_coordinates_fields = [{"Address":"text", "Longitude":"number", "Latitude":"text"}]
  gps_coordinates_fields_keys = Object.keys(this.gps_coordinates_fields[0]);

  capture_images_fields = [{"Farmer Images": "text", "Site Images":"text",}]
  capture_images_fields_keys = Object.keys(this.capture_images_fields[0]);

  power_connection_fields = [{"Phase One": ["one", "two", "three"], "Phase Two": ["one", "two", "three"], "Phase Voltage ": ["220", "440"], "Availability per day": ["phase_one_ava", "phase_two_ava"]}]
  power_connection_fields_keys = Object.keys(this.power_connection_fields[0]);

  marketing_area_images_fields = [{"Marketing Area Image": "text"}]
  marketing_area_images_fields_keys = Object.keys(this.marketing_area_images_fields[0]);

  installation_material_fields = [{"Shade Clothes": "checkbox", "PVC": "checkbox", "Metal Pipe": "checkbox" }]
  installation_material_fields_keys = Object.keys(this.installation_material_fields[0]);

  water_supply_fields = [{"River": "checkbox", "Rain Water": "checkbox", "Artificial Ponds": "checkbox", "Water Harvesting": "checkbox",
                        "Availability per day": ["per hr", "per day"]}]
  water_supply_fields_keys = Object.keys(this.water_supply_fields[0]);

  tool_requirements_fields = [{"Measure Tape": "checkbox", "Calcium Carbonate": "checkbox", "Tractor": "checkbox", "Auger": "checkbox"}]
  tool_requirements_fields_keys = Object.keys(this.tool_requirements_fields[0]);


  constructor(private afDB:AngularFireDatabase, private router:Router, private datastoreservice:DatastoreService, public alertController: AlertController) { }

  async addFieldPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Forgot Password!',
      inputs: [
        {
          name: 'fieldname',
          type: 'text',
          placeholder: 'Enter Field Name'
        },
        {
          name: 'fieldtype',
          type: 'text',
          placeholder: 'Enter Field Type'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            this.addField(data)
          }
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {
    this.getAllTasks()
  }

  getAllTasks(){
    this.afDB.list(`task/${this.datastoreservice.selected_team}/`).valueChanges().subscribe(data => {
      this.tasks = data
      console.log(this.tasks, "TASKS DATA FROM FIREBASE")
    })
  }
  showPopupFieldAdd(obj){
    this.selected_Object = obj
    console.log(obj, "SELECED OBJECT*****")
    this.addFieldPrompt()
  }

  // Below Code For Farmer Details Task Fields
  addField(data){
    // console.log(data, "****")
    this.add_fields_status = true
    console.log(this.selected_Object, "farmer_details_fields********")
    this.selected_Object[0][data.fieldname]=data.fieldtype
    console.log(this.selected_Object, "ADDED FIELD")
    this.selected_Object_keys = Object.keys(this.selected_Object[0]);
    console.log(this.selected_Object, "ADDED KEYS")
  }

  addTask(obj){
    if(this.add_fields_status === false){
      this.afDB.object(`addedtasksfields/${this.datastoreservice.selected_team}/` +  this.selected_task).set(obj[0]).then((res)=> {
        console.log(res)
        this.add_fields_status = false

        this.router.navigateByUrl("/dashboard");
      }).catch(e=> {
        console.log(e)
      })
    }else{
      this.afDB.object(`addedtasksfields/${this.datastoreservice.selected_team}/` +  this.selected_task).set(this.selected_Object[0]).then((res)=> {
        console.log(res)
        this.add_fields_status = false

        this.router.navigateByUrl("/dashboard");
      }).catch(e=> {
        console.log(e)
      })
    }

  }

  // Below Code For GPS COORDINATES Task Fields
  addGPSCoordinatesField(data){
    console.log(data, "****")
    this.gps_coordinates_fields[0][data.fieldname]=data.fieldtype
    console.log(this.gps_coordinates_fields, "ADDED FIELD")
    this.farmer_details_fields_keys = Object.keys(this.gps_coordinates_fields[0]);
    console.log(this.gps_coordinates_fields, "ADDED KEYS")
  }

  addGPSCoordinatesTask(){
    this.afDB.object(`addedtasksfields/${this.datastoreservice.selected_team}/` +  this.selected_task).set(this.gps_coordinates_fields[0]).then((res)=> {
      console.log(res)
      this.router.navigateByUrl("/dashboard");
    }).catch(e=> {
      console.log(e)
    })
  }


}
