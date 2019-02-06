/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var item1;
	var item2;
	var item3;
	var resultado;

	item1 = precioUno.value;
	item1 = parseInt(item1);
	item2 = precioDos.value;
	item2 = parseInt(item2);
	item3 = precioTres.value;
	item3 = parseInt(item3);

	resultado = item1+item2+item3;

	alert(resultado);




}

function Promedio () 
{
	var item1;
	var item2;
	var item3;
	var resultado;

	item1 = precioUno.value;
	item1 = parseInt(item1);
	item2 = precioDos.value;
	item2 = parseInt(item2);
	item3 = precioTres.value;
	item3 = parseInt(item3);


	resultado = (item1+item2+item3)/3;

	alert(resultado);
	
}
function PrecioFinal () 
{
	
	var item1;
	var item2;
	var item3;
	var sumando;
	var iva21;
	var resultado;

	item1 = precioUno.value;
	item1 = parseInt(item1);
	item2 = precioDos.value;
	item2 = parseInt(item2);
	item3 = precioTres.value;
	item3 = parseInt(item3);

	sumando = item1+item2+item3;
	iva21 = (sumando*21)/100;
    resultado= sumando+iva21;

	alert(resultado);
}