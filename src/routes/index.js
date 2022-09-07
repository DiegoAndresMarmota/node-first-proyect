import { Router } from 'express'
const ruta = Router()

ruta.get("/", (req, res) => res.render("indice"));

ruta.get("/acerca_de", (req, res) => res.render("acerca_de"));

ruta.get("/contacto", (req, res) => res.render("contacto"));

export default ruta