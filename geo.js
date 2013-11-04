function ubicar()
{
	navigator.geolocation.getCurrentPosition(mostrar);
}

function mostrar(pos)
{
	var mapa = document.getElementById("mapa");
	var latlon=pos.coords.latitude+","+pos.coords.longitude;
	var img_url="http://maps.googleapis.com/maps/api/staticmap?center="
+latlon+"&zoom=14&size=400x300&sensor=false";
	mapa.innerHTML = "<img src='"+img_url+"''>";
	var latitud = pos.coords.latitude;
	var longitud = pos.coords.longitude;
	var instante = new Date(pos.timestamp);
	document.getElementById("resultado").innerHTML = latitud+", "+longitud+", "+instante;
}

document.getElementById("ubicar").addEventListener("click",ubicar,false);