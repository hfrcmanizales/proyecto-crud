import express from "express";
import {Login,Register,vefityToken} from "../controller/userController.js"
import validarUsuario from "../midlewares/validaciones.js"
import validarLogin from "../midlewares/validarlogin.js"
const router = express.Router();

router.post("/login",validarLogin,Login)
router.post("/register",validarUsuario,Register)
router.get("/verifity",vefityToken)
export default router;