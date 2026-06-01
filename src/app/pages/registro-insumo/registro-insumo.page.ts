import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import {

IonContent,
IonInput,
IonItem,
IonButton,
IonSelect,
IonSelectOption

} from '@ionic/angular/standalone';

@Component({

selector:'app-registro-insumo',
templateUrl:'./registro-insumo.page.html',
styleUrls:['./registro-insumo.page.scss'],
standalone:true,

imports:[

CommonModule,
FormsModule,

IonContent,
IonInput,
IonItem,
IonButton,
IonSelect,
IonSelectOption

]

})

export class RegistroInsumoPage {

nombre='';
categoria='';
cantidad='';
unidad='';
fecha='';

constructor(
private router:Router
){}

irExitoso(){

this.router.navigate(
['/registro-exitoso']
);

}

}