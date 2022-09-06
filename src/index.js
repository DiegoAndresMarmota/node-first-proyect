import express from "express";

const app = express()

//Se extrae de la carpeta de las vistas a través de:
app.set('views', )

//Activar caracteristica de View Engine
app.set('view engine', 'ejs')

//Renderizar en el front, un archivo html, a traves de la ruta .ejs
app.get("/", (req, res) => res.render('index'));

app.listen(3000);

console.log("Server is listening on port", 3000);