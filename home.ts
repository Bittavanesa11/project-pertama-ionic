import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController} from 'ionic-angular';
@Component ({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
Username:string;
Password:string;

readonly MyUsername:string='bitavanesa'
readonly MyPassword:string='smenza'
  constructor(public navCtrl: NavController,public alertCtrl:AlertController) {

  }
showalert()
{
	let alert2 = this.alertCtrl.create({
		title:'data salah',
		subTitle:'Username atau password salah',
		buttons:['OK']
	});
	let alert = this.alertCtrl.create({
		title:'data benar',
		buttons:['OK']
	});
if (this.Username==this.MyUsername && this.Password == this.MyPassword){
	alert.present();
}else {
	alert2.present();
	}
	this.Username="";
	this.Password="";
}

}