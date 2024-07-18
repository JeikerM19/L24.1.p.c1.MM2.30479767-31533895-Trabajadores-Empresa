import Cl_empresa from "./Cl_empresa.js";
import Cl_trabajadores from "./Cl_trabajadores.js";

let trab1 = new Cl_trabajadores("Mary", 30, 10);
let trab2 = new Cl_trabajadores("José", 35, 5);
let trab3 = new Cl_trabajadores("Carlos", 35, 0);
let trab4 = new Cl_trabajadores("Pedro", 25, 10);

let emp = new Cl_empresa();
emp.procesarTrabajadores(trab1);
emp.procesarTrabajadores(trab2);
emp.procesarTrabajadores(trab3);
emp.procesarTrabajadores(trab4);

let salida = document.getElementById("Salida");
salida.innerHTML += "Monto total pagado por horas extras: " + emp.mostrarPHorasE() + "<br> Nombre del trabjador con el menor salario es: " + emp.mostrarNMenor() + " con un sueldo de " + emp.mostrarSMenor()