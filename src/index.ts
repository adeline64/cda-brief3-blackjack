import { Croupier } from "./components/croupier/Croupier";
import { Joueur } from "./components/joueur/Joueur";
import { Personnage } from "./components/personnage/Personnage";

let croupier = new Croupier();
let joueur = new Joueur();
let personnage = new Personnage();



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
gagnant();
arreter();

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
    console.log("Carte croupier");
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

function gagnant() {
    console.log("======================");

    if( joueur.score === 21) {
        console.log("Le joueur gagne");
        
    }
    
    if( joueur.score > 21) {
        console.log("Le Croupier gagne");
        
    }

    if(croupier.score > 21 ) {
        console.log("Le joueur gagne");
        
    }
}

