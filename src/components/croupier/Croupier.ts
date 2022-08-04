import { Personnage } from "../personnage/Personnage";

export class Croupier extends Personnage {
    static calculerScore: any;

    prendreCarte(): number {
        return this.distribuerCarte();
    }

    retournerCarte(): number {
        return this.cartes[0];
    }

    distribuerCarte(): number {
        return Math.floor(Math.random() * (14 - 1)) + 1;
    }
}