function nuevoAjax()
{
	var xmlhttp=false;
	try
	{
		xmlhttp = new ActivexObject('Msxml2.XMLHTTP');
	} catch(e)
	{
		try
		{
			xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
		} catch(e)
		{
			xmlhttp = false;
		}
	}

	if (!xmlhttp && typeof XMLHttpRequest != 'undefined')
	{
		xmlhttp = new XMLHttpRequest();
	}
	return xmlhttp;
}

function mostrarUbicacion()
{
	var geoconfiguracion = {enableHighAccuracy:true,time:10000,maximumAge:60000};
	navigator.geolocation.getCurrentPosition(mostrarU,errores,geoconfiguracion);
}

function errores(error)
{
	document.getElementById('resultado').innerHTML = error.code+','+error.message;
}


function mostrarU(pos)
{
	var latitud = pos.coords.latitude;
	var longitud = pos.coords.longitude;
	var instante = new Date(pos.timestamp);
	var datos = 'lat='+latitud+'&long='+longitud+'&time='+instante;
	registrar(datos);
}

//Envío de datos por GET
function registrar(datos)
{
	
	ajax=nuevoAjax();
	ajax.open("GET","registrar.php?"+datos,true);
	ajax.onreadystatechange = function()
	{
		if (ajax.readyState = 4)
		{
			document.getElementById('mostrar').innerHTML = ajax.responseText
		}
	}
	ajax.send(null)
}

//Carga de Contenidos
function cargarContenido()
{
	var contenedor = document.getElementById('mostrar');
	ajax=nuevoAjax();
	ajax.open("GET","mostrar.php",true);
	ajax.onreadystatechange = function()
	{
		if (ajax.readyState = 4)
		{
			contenedor.innerHTML = ajax.responseText
		}
	}
	ajax.send(null)
	contenedor.style.textAlign='center'; 
}

document.getElementById('registrar').onclick = function()
{
	mostrarUbicacion();
}
window.onload = function()
{
	cargarContenido();
}