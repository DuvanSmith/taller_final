import express from "express";
import {
  crearCredito,
  obtenerCreditos,
  obtenerCreditoPorId,
  actualizarCredito,
  eliminarCredito,
  obtenerCreditoPorCliente,
} from "../controllers/creditoController.js";
import { protegerRuta } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protegerRuta, crearCredito);
router.get("/", protegerRuta, obtenerCreditos);
router.get("/:id", protegerRuta, obtenerCreditoPorId);
router.put("/:id", protegerRuta, actualizarCredito);
router.delete("/:id", protegerRuta, eliminarCredito);
router.get("/cliente/:cliente_id", protegerRuta, obtenerCreditoPorCliente);

export default router;