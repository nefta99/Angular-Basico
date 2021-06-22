import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
   declarations:[
       HeroeComponent,
       ListadoComponent
   ],
   //Que cosas quiero que sea visible fuera del modulo
   exports:[
       ListadoComponent
   ],
   //Solamente van modulos
   imports:[
    CommonModule
   ]
})
export class HeroesModule{}
