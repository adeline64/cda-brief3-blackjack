import { Personnage } from "../personnage/Personnage";

export class Joueur extends Personnage{

  demanderCarte():boolean{
    return true;
  }

  arreter():boolean {
    return true;
  }
}