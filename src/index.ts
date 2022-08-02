import { Croupier } from "./components/croupier/Croupier";
import { Joueur } from "./components/joueur/Joueur";

let croupier = new Croupier();
let joueur = new Joueur();



let carteJoueur: number;
let cartesCroupier: number;

for( let i = 0; i < 2; i++ ) {
    cartesCroupier = croupier.distribuerCarte();
    carteJoueur = croupier.distribuerCarte();
    croupier.cartes.push(cartesCroupier);
    joueur.cartes.push(carteJoueur);
}

let demmanderCarte: boolean = joueur.demanderCarte();

if(demmanderCarte) {
    carteJoueur =croupier.distribuerCarte();
    joueur.cartes.push(carteJoueur);
}


console.log(croupier.cartes);
console.log(joueur.cartes);
