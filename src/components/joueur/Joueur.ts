import { Personnage } from "../personnage/Personnage";

export class Joueur extends Personnage{
  static calculerScore() {
    throw new Error("Method not implemented.");
  }

  demanderCarte():boolean{
    return true;
  }

  arreter():boolean {
    return true;
  }
}