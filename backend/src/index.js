import dotenv from "dotenv"
import app from "./app.js"
import Connect from "./db.js"


dotenv.config()
Connect()

app.listen(process.env.PORT||3000,()=>{
	console.log("ruta en puerto 4000")
})