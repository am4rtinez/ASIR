
DROP DATABASE IF EXISTS taller;
CREATE DATABASE taller CHARACTER SET utf8 COLLATE utf8_spanish_ci;
USE taller;
CREATE TABLE coches
(
    matricula varchar(8) NOT NULL,
    marca varchar(100) NOT NULL,
    modelo varchar(100) NOT NULL,
    motor varchar(100) NOT NULL,
    combustible varchar(50) NOT NULL,
	kilometraje int(7) NOT NULL,
    color varchar(50) NOT NULL,
    itv tinyint(1) NOT NULL,
    tareas varchar(500),
    fecha_alta TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    fecha_modificacion DATETIME,
    CONSTRAINT pk_coches PRIMARY KEY (matricula)
) ENGINE = InnoDB;

INSERT INTO coches (matricula, marca, modelo, motor, combustible, kilometraje, color, itv, tareas, fecha_alta, fecha_modificacion)
VALUES
("3772GKC", "Seat", "Ibiza SC Sport", "1.9 TDI 105cv", "diesel", 145698, "Gris Track", 0, "Cambio neumáticos delanteros.", now(), now()),
("3768HKP", "Audi", "A3 AMBIANCE", "1.6 TDI 105cv", "diesel", 78965, "Granito", 1, "Revisión aceite y filtros. Cambio pastillas de freno.", now(), now()),
("6598JKP", "Ford", "Fiesta ST", "1.8 CDI 105cv", "diesel", 60000, "Rojo", 1, "Revisión aceite y filtros. Cambio escobillas", now(), now()),
("2598FDM", "Opel", "Zafira", "1.6 125cv", "gasolina", 180659, "Azul", 0, "Cambio discos de freno.", now(), now()),
("8865CDS", "Volkswagen", "Golf IV GTI", "2.5 240cv", "gasolina", 204987, "Blanco", 0, "Revisión pre-ITV.", now(), now());