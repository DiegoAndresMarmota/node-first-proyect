import { Router } from "express";
const ruta = Router();

ruta.get("/", (req, res) =>
  res.render("indice", { titulo: "Primer web con node" })
);

ruta.get("/acerca_de", (req, res) =>
  res.render("acerca_de", { titulo: "Acerca de" })
);

ruta.get("/contacto", (req, res) =>
  res.render("contacto", { titulo: "Contacto" })
);

export default ruta;
