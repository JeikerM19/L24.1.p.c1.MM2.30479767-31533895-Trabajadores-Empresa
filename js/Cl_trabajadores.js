export default class Cl_trabajadores {
    constructor(n, hR, hE) {
        this.nom = n;
        this.horasR = hR;
        this.horasE = hE;

    }
    get nom() {
        return this._nom;
    }
    set nom(n) {
        this._nom = n;
    }

    get horasR() {
        return this._horasR;
    }
    set horasR(hR) {
        this._horasR = hR;
    }

    get horasE() {
        return this._horasE;
    }
    set horasE(hE) {
        this._horasE = hE;
    }
    sueldoBase(){
        return this.horasR * 10;
    }
    incremento(){
        return this.horasE * 25;
    }
    sueldoT(){
        return this.sueldoBase() + this.incremento();
    }
}