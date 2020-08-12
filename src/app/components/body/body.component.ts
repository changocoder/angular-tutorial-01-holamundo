import { Component } from '@angular/core';
import { Personaje } from 'src/app/models/personaje';
@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {

    mostrar = true;
    personajes = [new Personaje(1,'Spiderman'), new Personaje(2,'Venom'),new Personaje(3,'Duende Verde')];

    frase = {

            mensaje : "Un gran poder requiere una gran responsabilidad",
            autor: "Ben Parker"
    };

}