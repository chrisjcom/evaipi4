-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-11-2013 a las 04:48:32
-- Versión del servidor: 5.6.11
-- Versión de PHP: 5.5.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `geo`
--
CREATE DATABASE IF NOT EXISTS `geo` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `geo`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `geol`
--

CREATE TABLE IF NOT EXISTS `geol` (
  `idGeo` int(11) NOT NULL AUTO_INCREMENT,
  `idIp` int(11) NOT NULL,
  `latitud` varchar(45) NOT NULL,
  `longitud` varchar(45) NOT NULL,
  `tiempo` varchar(45) NOT NULL,
  PRIMARY KEY (`idGeo`,`idIp`),
  KEY `idIp` (`idIp`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Volcado de datos para la tabla `geol`
--

INSERT INTO `geol` (`idGeo`, `idIp`, `latitud`, `longitud`, `tiempo`) VALUES
(1, 1, '14.624795', '-90.53281799999999', 'Sun Nov 03 2013 21:43:24 GMT-0600 (Hora estÃ¡');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ip`
--

CREATE TABLE IF NOT EXISTS `ip` (
  `idIp` int(11) NOT NULL AUTO_INCREMENT,
  `ip` varchar(45) NOT NULL,
  PRIMARY KEY (`idIp`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Volcado de datos para la tabla `ip`
--

INSERT INTO `ip` (`idIp`, `ip`) VALUES
(1, '::1');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `geol`
--
ALTER TABLE `geol`
  ADD CONSTRAINT `geol_ibfk_1` FOREIGN KEY (`idIp`) REFERENCES `ip` (`idIp`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
