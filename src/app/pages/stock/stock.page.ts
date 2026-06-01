import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

insumos=[

{
codigo:'INS001',
nombre:'Tomate',
categoria:'Verduras',
cantidad:25,
unidad:'Kg',
icono:'🥬'
},

{
codigo:'INS002',
nombre:'Pollo',
categoria:'Carnes',
cantidad:50,
unidad:'Kg',
icono:'🍗'
},

{
codigo:'INS003',
nombre:'Aceite',
categoria:'Insumos',
cantidad:12,
unidad:'Litros',
icono:'🛢️'
},

{
codigo:'INS004',
nombre:'Arroz',
categoria:'Granos',
cantidad:40,
unidad:'Kg',
icono:'🌾'
}

];


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

}


