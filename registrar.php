<?php
	include("conexion.php");
	$ip = $_SERVER["REMOTE_ADDR"];
	$longitud = $_GET["long"];
	$latitud = $_GET["lat"];
	$tiempo = $_GET["time"];

	$instancia = new conexion("","","","");
	$sql = "insert into ip(ip) values('".$ip."')";
	$instancia->CUD($sql);
	$sql = "insert into geol(idIp,latitud,longitud,tiempo) values((SELECT max(idIp) FROM ip),'".$latitud."','".$longitud."','".utf8_decode($tiempo)."')";
	$instancia->CUD($sql);
	$sql = "select (select ip from ip i where i.idIp=g.idIp),latitud,longitud,tiempo from geol g";
	$result = $instancia->Extraer($sql);
	while($res = mysqli_fetch_array($result))
	{
		echo "IP: ".$res[0]."___COORDENADAS: ".$res[1].",".$res[2]."___FECHA: ".$res[3]."<br>";	
	}
	$instancia->cerrarConexion();
?>