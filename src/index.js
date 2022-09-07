import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const aplicacion = express();

const rutaPrincipal = dirname(fileURLToPath(import.meta.url));
console.log(join(rutaPrincipal, "views"));

//Se extrae de la carpeta de las vistas a través de, y se agrega la ruta
aplicacion.set("views", join(rutaPrincipal, "views"));

//Activar caracteristica de View Engine
aplicacion.set("view engine", "ejs");

aplicacion.listen(3000);

console.log("Servidor esta escuchando en el puerto", 3000);
