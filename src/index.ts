import { Croupier } from "./components/croupier/Croupier";
import { Joueur } from "./components/joueur/Joueur";

let croupier = new Croupier();
let joueur = new Joueur();



let carteJoueur: number;
let cartesCroupier: number;

donnerCarte();
afficherCarte();
calculeScore();
afficherScore();
demmander();
afficherCarte();
calculeScore();
afficherScore();

function donnerCarte(): void {
    console.log("****************************");
    console.log("Le jeu commence");
    console.log("****************************");

    for( let i = 0; i < 2; i++ ) {
        cartesCroupier = croupier.distribuerCarte();
        carteJoueur = croupier.distribuerCarte();
        croupier.cartes.push(cartesCroupier);
        joueur.cartes.push(carteJoueur);
    }
}

function afficherCarte(): void {
    console.log("Carte du joueur");
    console.log(joueur.cartes);    
    console.log("Carte croupoer");
    console.log(croupier.cartes[1]);
}

function calculeScore(): void {
    croupier.score = croupier.calculerScore(croupier.cartes);
    joueur.score = joueur.calculerScore(joueur.cartes);
}

function afficherScore(): void {
    console.log("=================================");
    console.log("Le score du croupier est : "+ croupier.score);
    console.log("Le score du joueur est : "+ joueur.score);
}

function demmander(): void {
    console.log("=================================");
    console.log("Le joueur demmande une carte");
    
    if(joueur.demanderCarte()) {
        carteJoueur =croupier.distribuerCarte();
        joueur.cartes.push(carteJoueur);
    }
}

function arreter(): void {
    
}
