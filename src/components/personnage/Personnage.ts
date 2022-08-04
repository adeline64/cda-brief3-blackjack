import { Croupier } from "../croupier/Croupier";
import { Joueur } from "../joueur/Joueur";


export class Personnage {
  private _cartes: number[] = [];
  private _score : number = 0;

  constructor() {

  }

  get cartes() {
    return this._cartes;
  }

  set cartes(cartes: number[]){
    this._cartes = cartes;
  }

  get score() {
    return this._score;
  }

  set score(score:number){
    this._score = score;
  }

  calculerScore(cartes:number[]): number {
    let score: number = 0;

    for(let i= 0; i<cartes.length; i++) {
      /*if(cartes[i] === 1) {
        
      }*/

      if(cartes[i] > 10) {
        cartes.splice(i, 1, 10);
      }
      score += cartes[i];
    }

    return score;
  }

  gagnant(scoreJoueur: number, scoreCroupier: number): void{
    
    if( scoreJoueur === 21) {
      console.log("Le joueur gagne");
      
    }
    
    if( scoreJoueur > 21) {
      console.log("Le Croupier gagne");
      
    }

    if(scoreCroupier > 21 ) {
      console.log("Le joueur gagne");
      
    }

  }
}