import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  fieldtype = "password"
  _storage: Storage | null = null;

  constructor(private router:Router, private authobj:AngularFireAuth, public alertController: AlertController, public storage: Storage) { }

  async errorAlert(title, subtitle, msg) {
    const alert = await this.alertController.create({
      cssClass: 'errorAlert',
      header: title,
      subHeader: subtitle,
      message: msg,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  async successAlert(title, subtitle, msg) {
    const alert = await this.alertController.create({
      cssClass: 'successAlert',
      header: title,
      subHeader: subtitle,
      message: msg,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async forgetpasswordPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Forgot Password!',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Enter Email'
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
            this.sendemailtocreatenewpassword(data)
          }
        }
      ]
    });

    await alert.present();
  }

  async ngOnInit() {
    this.storage.create();

    const ionicdata = await this.storage.get('uid');
    console.log(ionicdata)
    if (ionicdata) {
      this.router.navigateByUrl('/dashboard');
    }
  }

  login(data){
    console.log(data)
    this.authobj.signInWithEmailAndPassword(data.email, data.password).then((res)=> {
      console.log(res.user.uid)
      this.storage.set('uid', res.user.uid);

      this.router.navigateByUrl("/dashboard")
    }).catch(e => {
      this.errorAlert("Error", "Invalid Credential", "Please check your login credentials")
      console.log(e, "ERROR FROM LOGIN")
    })
  }
  forgetpassword(){
    this.forgetpasswordPrompt()
  }
  sendemailtocreatenewpassword(data){
    if(data.email){
      this.authobj.sendPasswordResetEmail(data.email).then( (res)=> {
        console.log(res)
        this.successAlert("Success", "Email Send", "To reset the password click on link send to your email")
      }).catch(e => {
        console.log(e)
        this.errorAlert("Error", "Email Not Fount", "")
      })
    }else{
      this.errorAlert("Error", "Invalid Email", "")
    }
  }

  showpass(){
    this.fieldtype = "text"
  }
  hidepass(){
    this.fieldtype = "password"
  }

}
