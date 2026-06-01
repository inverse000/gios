import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
InventarioService,
Insumo
}
from '../../services/inventario';

import {
IonContent,
IonItem,
IonInput,
IonButton,
IonCard,
IonCardContent
} from '@ionic/angular/standalone';

@Component({

selector:'app-stock',
templateUrl:'./stock.page.html',
styleUrls:['./stock.page.scss'],
standalone:true,

imports:[
CommonModule,
FormsModule,
IonContent,
IonItem,
IonInput,
IonButton,
IonCard,
IonCardContent
]

})

export class StockPage {

busqueda='';

insumos:Insumo[]=[];

constructor(
private inventarioService:InventarioService
){}

ionViewWillEnter(){

this.cargarInsumos();

}

cargarInsumos(){

this.insumos =
this.inventarioService.obtenerInsumos();

}

obtenerEstado(cantidad:number){

if(cantidad <= 10){

return 'Crítico';

}

if(cantidad <= 25){

return 'Bajo';

}

return 'Normal';

}

obtenerClaseEstado(cantidad:number){

if(cantidad <= 10){

return 'estado-critico';

}

if(cantidad <= 25){

return 'estado-bajo';

}

return 'estado-normal';

}

eliminarInsumo(id:number){

this.inventarioService.eliminarInsumo(
id
);

this.cargarInsumos();

}

obtenerIcono(categoria:string){

switch(categoria){

case 'Verduras':
return '🥬';

case 'Carnes':
return '🍗';

case 'Bebidas':
return '🥤';

case 'Granos':
return '🌾';

default:
return '📦';

}

}

}

