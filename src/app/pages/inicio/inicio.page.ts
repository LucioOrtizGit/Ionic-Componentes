import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

interface Componente {
  icon: string;
  name: string;
  redirect: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon:'american-football-outline',
      name:'Action Sheet',
      redirect:'/action-sheet'
    },
    {
      icon:'logo-apple-appstore',
      name:'Alert',
      redirect:'/alert'
    },
    // {
    //   icon:'phone-portrait-outline',
    //   name:'Modal',
    //   redirect:'/modal'
    // }

  ]

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }

  async mostrarModal(){
    
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: {
        login: 'Logeado',
        condiciones: 'Aceptadas'
      }
    });
  
    await modal.present();
  
    const data = await modal.onWillDismiss();
  
    console.log(data);
  
  }

}
