function mostrar()
{

var horaIngresada;
horaIngresada=laHora.value;
horaIngresada=parseInt(horaIngresada);
var mensaje;

switch(horaIngresada)
{
	case 6:
	case 7:
	case 8:
	case 9:
	case 10:
	case 11:
		mensaje="Es de mañana";
		break;

	case 12:
	case 13:
	case 14:
	case 15:
	case 16:
	case 17:
	case 18:
	case 19:
		mensaje="Es de tarde";
		break;

	case 1:
	case 2:
	case 3:
	case 4:
	case 5:

		mensaje="Es de noche";
		break;
		

	case 20:
	case 21:
	case 22:
	case 23:
	case 24:
		
		if (laHora.value==20||laHora.value==21||laHora.value==22||laHora.value==23||laHora.value==24)
		{
			mensaje="A dormir";
		}
		break;

	default:
		mensaje="No es una hora valida";



}

alert(mensaje);

}
