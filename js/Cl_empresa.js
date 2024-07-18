export default class Cl_empresa{
    constructor(){
        this.acumIncremento = 0.0;
        this.menor = 10000;
        this.auxNom = "";
        this.auxSueldo = 0.0;
    }
    procesarTrabajadores(trab){
        this.acumIncremento += trab.incremento();
        if(trab.sueldoT() < this.menor){
            this.auxNom = trab.nom;
            this.auxSueldo = trab.sueldoT();
            this.menor = trab.sueldoT();
        }
    }
    mostrarPHorasE(){
        return this.acumIncremento;
    }
    mostrarNMenor(){
        return this.auxNom;
    }
    mostrarSMenor(){
        return this.auxSueldo;
    }
}