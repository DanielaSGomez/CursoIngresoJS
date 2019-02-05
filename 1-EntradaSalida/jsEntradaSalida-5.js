/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre = prompt("Ingrese su nombre");
	var edad = prompt ("Ingrese su edad");

	elNombre.value=nombre;
	laEdad.value=edad;

	alert("Usted se llama " + nombre + " y tiene " + edad + " años.");


}

