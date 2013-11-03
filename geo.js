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
}

document.getElementById("btn_ubicar").addEventListener("click",ubicar,false);