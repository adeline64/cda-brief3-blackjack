export class Personnage {
    private _cartes: number[] = []
    private _score : number = 0
    
    constructor() {

    }

    get cartes() {
      return this._cartes;
    }

    set cartes(cartes: number[]){
      this.cartes  = cartes;
    }

    get score() {
      return this._score
    }

    set score(score:number){
      this._score = score;
    }

    gagnant(){
        
    }
  }