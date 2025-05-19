import User from "../models/useSchema.js"
import bcryptjs from "bcryptjs"
import createToken from "../token/token.js"
import jwt from "jsonwebtoken";


export const Login = async(req,res)=>{
    const {email,password}=req.body;
    try{

    const buscaUsuario = await User.findOne({email})
    if(!buscaUsuario)return res.status(400).json({message:"usuario no encontrado"})
    
    const clave = await bcryptjs.compare(password,buscaUsuario.password)
    if(!clave) return res.status(400).json({Message:"clave no coincide"})
    
    const token = await createToken({id:buscaUsuario._id})
    res.cookie("token", token, {
  httpOnly: true,
  secure: true,           // 👈 OBLIGATORIO en producción HTTPS
  sameSite: "None",       // 👈 PERMITE que frontend y backend estén en dominios distintos
});

   res.json(buscaUsuario)

    }catch(error){
    	res.status(400).json({message:error.message})
    }
}







export const Register = async(req,res)=>{
    const {name,email,password}=req.body;

    try{
      
        const verificarEmail = await User.findOne({email})
        if(verificarEmail)return res.status(400).json({message:"el email ya existe"})


       const nuevaPassword= await bcryptjs.hash(password,10)
       const nuevoUser =new User({
    	name,
    	email,
    	password:nuevaPassword
    })

    const response = await nuevoUser.save()
    const token = await createToken({id:response._id})
    res.cookie("token", token, {
  httpOnly: true,
  secure: true,           // 👈 OBLIGATORIO en producción HTTPS
  sameSite: "None",       // 👈 PERMITE que frontend y backend estén en dominios distintos
});
    res.json({
    	name,
    	email,
    	token:token
    })
    }catch(error){
     console.log(error)
    }




}

export const vefityToken = (req,res)=>{
    const {token} = req.cookies;
    if(!token)return res.state(400).json({message:"token no found"})
    jwt.verify(token,process.env.SECRET,async(error,user)=>{
        if(error)return res.status(400).json({message:"token no valido"})
        const response = await User.findById(user.id)
        if(!response)return res.status(401).json({message:"no existe usuario"})
         return res.send("todo salio bien")
             
    })    
}