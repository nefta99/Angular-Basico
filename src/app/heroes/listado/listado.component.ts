import { Component } from '@angular/core';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'

})
export class ListadoComponent  {

  heroes : string[] = ['spiderman','Ironman','Hulk','Thor','Capitan amarica'];

  heroeBorrado : string="";
  mostrar :boolean=false;
  
  borrarHereo(): void{
    //console.log("Borrando...");
    this.heroeBorrado = this.heroes.shift() || '';
    
  }

}
