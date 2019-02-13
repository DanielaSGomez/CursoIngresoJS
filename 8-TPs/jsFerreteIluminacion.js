/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	/*var precioUnaLamparita;
 	precioUnaLamparita = 35;

 	var numeroLamparitasCompradas;
 	numeroLamparitasCompradas = Cantidad.value;
 	numeroLamparitasCompradas = parseInt(numeroLamparitasCompradas);
 	
 	var precioSinDescuento;
 	precioSinDescuento = numeroLamparitasCompradas*precioUnaLamparita;

 	var recargo;
 	recargo = (precioDescuento*10)/100;


 	if (numeroLamparitasCompradas>=6) {
 		precioDescuento.value = precioSinDescuento-((precioSinDescuento*50)/100);
 	} else if(numeroLamparitasCompradas==5&&Marca.value=="ArgentinaLuz") {
 		precioDescuento.value = precioSinDescuento-((precioSinDescuento*40)/100);
 	} else if (numeroLamparitasCompradas==5&&Marca.value!="ArgentinaLuz") {
 		precioDescuento.value = precioSinDescuento-((precioSinDescuento*30)/100);
 	} else if (numeroLamparitasCompradas==4&&(Marca.value=="ArgentinaLuz"||Marca.value=="FelipeLamparas")) {
 		precioDescuento.value = precioSinDescuento-((precioSinDescuento*25)/100);
 	} else if (numeroLamparitasCompradas==4&&(Marca.value!="ArgentinaLuz"||Marca.value!="FelipeLamparas")) {
 		precioDescuento.value = precioSinDescuento-((precioSinDescuento*20)/100);
 	} else if (numeroLamparitasCompradas==3&&Marca.value=="ArgentinaLuz") {
 		precioDescuento.value = precioSinDescuento-((precioSinDescuento*15)/100);
 	} else if (numeroLamparitasCompradas==3&&Marca.value=="FelipeLamparas") {
 		precioDescuento.value = precioSinDescuento-((precioSinDescuento*10)/100);
 	} else if (numeroLamparitasCompradas==3&&(Marca.value!="FelipeLamparas"&&Marca.value!="ArgentinaLuz")) {
 		precioDescuento.value = precioSinDescuento-((precioSinDescuento*5)/100);
 	}  else {
 		precioDescuento.value = precioSinDescuento;

 	}*/


 	var lamparitas;
 	var precioUnitario=35;
 	var precioSinDescuento;
 	var precioFinal;

 	lamparitas=Cantidad.value;
 	lamparitas=parseInt(lamparitas);
 	precioSinDescuento=precioUnitario*lamparitas;

 	








}
