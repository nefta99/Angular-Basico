import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";

@Injectable()
export class DbzService{

    /*
    1. propiedades
    2.- Metodos
    3.- get
    4.- set
    5.- contructor
    */
    

    private _personajes : Personaje[]=[
        {
          nombre:'Goku',
          poder:15000
        }
        ,{
          nombre:'Vegeta',
          poder:7500
        }
    ];

    get personajes(): Personaje[]{
        return [...this._personajes];
    }
      
    constructor(){
        
    }

    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }


}
//fin de clase