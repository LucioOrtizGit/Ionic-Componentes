import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../../pages/modal/modal.page';

@Component({
  selector: 'app-componente-modal',
  templateUrl: './componente-modal.component.html',
  styleUrls: ['./componente-modal.component.scss'],
})
export class ComponenteModalComponent implements OnInit {

  // @Input() login:string = 'User 01';
  // @Input() condiciones:string = 'Aceptadas';

  @Input() saltar: boolean = true;



  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {


  }

  volver() {
    this.modalCtrl.dismiss();
  }

  // salirSinArgumentos() {

  //   this.modalCtrl.dismiss();
  // }

  // salirConArgumentos() {
  //   this.modalCtrl.dismiss({
  //     login: 'user 1',
  //     condiciones: 'no aceptadas'
  //   });
  // }


}
