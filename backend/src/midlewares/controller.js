import jwt from "jsonwebtoken";


export const verifity = (req,res,next)=>{
	const {token}=req.cookies;
   if(!token)return res.status(400).json({message:"token no existe"})
  
  jwt.verify(token,process.env.SECRET,(error,user)=>{
  	if(error)return res.status(400).json({message:"token no valido"})
  		req.user=user
  		next()
  })
  

	
}