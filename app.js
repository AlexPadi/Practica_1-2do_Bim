var ingresos=25000;
var gastos_deducibles=6000;
var baseImponible=ingresos-gastos_deducibles;
var impuesto=0;
var impuestoFraccionBasica=0;
var impuestoPorcentajeEx=0;
var excedente=0;
let fraccionBasica=[0,11290,14390,17990,21600,43190,64770,86370,115140];
var porcentajeExcedente=[0,0.05,0.1,0.12,0.15,0.20,0.25,0.30,0,35];


if (baseImponible>17854 && baseImponible<=21442)
{
impuestoFraccionBasica=511;
excedente=baseImponible-17854;
impuestoPorcentajeEx=excedente*0.12;
}
impuesto=impuestoFraccionBasica+impuestoPorcentajeEx;
document.write("<h3>Su impuesto a la renta es </h3>"+impuesto)
