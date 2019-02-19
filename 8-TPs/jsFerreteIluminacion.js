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


 	/*var lamparitas;
 	var precioSinDescuento;
 	var precioFinal;
 	var precioRecargo;
	var precioUnitario=35;
 

 	lamparitas=Cantidad.value;
 	lamparitas=parseInt(lamparitas);
 	precioSinDescuento=precioUnitario*lamparitas;


 	if (lamparitas>=6) {
 				precioFinal=precioSinDescuento-((precioSinDescuento*50)/100);
 				precioDescuento.value= precioFinal;
	
	}else if (lamparitas==5) {

			if (Marca.value=="ArgentinaLuz") {
			
				precioFinal=precioSinDescuento-((precioSinDescuento*40)/100);
				precioDescuento.value=precioFinal;
			
			}else{
			
				precioFinal=precioSinDescuento-((precioSinDescuento*30)/100);
				precioDescuento.value=precioFinal;
			}
	
	}else if (lamparitas==4) {

			if (Marca.value=="ArgentinaLuz"||Marca.value=="FelipeLamparas") {
				precioFinal=precioSinDescuento-((precioSinDescuento*25)/100);
				precioDescuento.value=precioFinal;

			}else{

				precioFinal=precioSinDescuento-((precioSinDescuento*20)/100);
				precioDescuento.value=precioFinal;
			}
	
	}else if (lamparitas==3) {

			if (Marca.value=="ArgentinaLuz") {
				
				precioFinal=precioSinDescuento-((precioSinDescuento*15)/100);
				precioDescuento.value=precioFinal;
			
			}else if (Marca.value=="FelipeLamparas") {
				
				precioFinal=precioSinDescuento-((precioSinDescuento*10)/100);
				precioDescuento.value=precioFinal;
			}else{
				
				precioFinal=precioSinDescuento-((precioSinDescuento*5)/100);
				precioDescuento.value=precioFinal;
			}

	}else{
		
		precioFinal=precioSinDescuento;
		precioDescuento.value=precioFinal;
	
	}


	

	if (precioFinal>=120) {
			

		precioRecargo=(precioFinal*10)/100;
		alert("IIBB Usted pago: $ "+precioRecargo);

	}*/



	var cantidadLamparas;
	var descuento;
	var marca;
	var precioBruto;
	var precioDescuento;



	cantidadLamparas=Cantidad.value;
	cantidadLamparas=parseInt(cantidadLamparas);
	marca=Marca.value;
	precioBruto=cantidadLamparas*35;




	if (cantidadLamparas>5)
	{

		descuento=50;
		
		
	}
	else
	{
		if (cantidadLamparas==5) 
		{
			if (Marca.value=="ArgentinaLuz") {

				descuento=40;
						

			}else
			{
				descuento=30;
			
			
			}
	}
	else
		{

			if (cantidadLamparas==4) 
			{
				if (Marca.value=="ArgentinaLuz"||Marca.value=="FelipeLamparas") 
				{
					descuento=25;
					
					


				}else
				{
					descuento=20;
					
					

				

				}//if (Marca.value=="ArgentinaLuz"||Marca.value=="FelipeLamparas")
			}
		else
			{
				if (cantidadLamparas==3) 
				{
					if (Marca.value=="ArgentinaLuz") 
					{
						descuento=15;
						
						
					}else
					{
						if (Marca.value=="FelipeLamparas") 
						{
							descuento=10;
							
							
						}else
						{
							descuento=5;
							
							
						}
					}




				}
				else
				{
					descuento=100;
					
descuento=precioBruto*descuento/100;
precioDescuento=precioBruto-descuento;
console.log(precioDescuento);

				}//(cantidadLamparas==3) 
			}//if (cantidadLamparas==4) 
		}//if (cantidadLamparas==5) 

	}//	if (cantidadLamparas>5)





}

