import express from "express";
import {createCrud,getTasks,oneCrud,putCrud,deleteCrud} from "../controller/crudcontrollers.js"
import {verifity} from "../midlewares/controller.js"

const crudRouter = express.Router();

crudRouter.post("/crud",verifity,createCrud)
crudRouter.get("/crud",verifity,getTasks)
crudRouter.get("/crud/:id",verifity,oneCrud)
crudRouter.put("/crud/:id",verifity,putCrud)
crudRouter.delete("/crud/:id",verifity,deleteCrud)



export default crudRouter;