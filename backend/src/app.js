import express from "express";
import router from "./routes/authRouter.js"
import cors from "cors"
import cookieParser from 'cookie-parser';
import crudRouter from "./routes/crudRouter.js"

const app = express();
app.use(cookieParser())

app.use(cors({
	origin:process.env.LOCAL||'http://localhost:5173',
    credentials: true}
	))
app.use(express.json())
app.use(router)
app.use(crudRouter)

export default app



