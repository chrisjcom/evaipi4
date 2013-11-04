<?php
	include("conexion.php");
	$instancia = new conexion("","","","");
	$sql = "select (select ip from ip i where i.idIp=g.idIp),latitud,longitud,tiempo from geol g";
	$result = $instancia->Extraer($sql);
	while($res = mysqli_fetch_array($result))
	{
		echo "IP: ".$res[0]."___COORDENADAS: ".$res[1].",".$res[2]."___FECHA: ".$res[3]."<br>";	
	}
	$instancia->cerrarConexion();
?>