import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pefil',
  templateUrl: './pefil.page.html',
  styleUrls: ['./pefil.page.scss'],
})
export class PefilPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  voltar() {
    this.navCtrl.navigateBack('')
  }

}
