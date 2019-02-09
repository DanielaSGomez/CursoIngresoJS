/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

	var largoIngresado;
	var anchoIngresado;
	var perimetro1;
	var totalAlambre;

	largoIngresado = Largo.value;
	largoIngresado = parseInt(largoIngresado);
	anchoIngresado = Ancho.value;
	anchoIngresado = parseInt(anchoIngresado);

	perimetro1 = (largoIngresado*2)+(anchoIngresado*2);

	totalAlambre = perimetro1*3;

	alert("Se necesitan " + totalAlambre + " metros de alambre.");	


}
function Circulo () 
{
	var radioIngresado;
	var valorPi;
	var diametroCalculo;
	var circunferencia;
	var alambreTotal;

	radioIngresado = Radio.value;
	radioIngresado = parseInt(radioIngresado);
	valorPi = 3.14;

	diametroCalculo = radioIngresado*2;
	circunferencia = valorPi*diametroCalculo;

	alambreTotal = circunferencia*3;


	alert("La cantidad necesaria es " + alambreTotal);


}
function Materiales () 
{
	
	var bolsaCemento;
	var bolsaCal;
	var largoIngresado;
	var anchoIngresado;

	var calculoAreaRectangulo;
	var calculoMaterialCemento;
	var calculoMaterialCal;

	bolsaCemento = 2;
	bolsaCal = 3;

	largoIngresado = Largo.value;
	largoIngresado = parseInt(largoIngresado);
	anchoIngresado = Ancho.value;
	anchoIngresado = parseInt(anchoIngresado);

	calculoAreaRectangulo = (largoIngresado*anchoIngresado)/2;

	calculoMaterialCemento = calculoAreaRectangulo*bolsaCemento;
	calculoMaterialCal = calculoAreaRectangulo*bolsaCal;

	alert("Se necesitan " + calculoMaterialCemento + " bolsas de cemento y " + calculoMaterialCal + " bolsas de cal.")
	

	
}