import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()


async function Connect(){

	try{
     await mongoose.connect(process.env.MONGO);
     console.log("connectado a la base datos")
     
	}catch(error){
		console.log("no se pudo conectar a la base de datos")
	}
}

export default Connect