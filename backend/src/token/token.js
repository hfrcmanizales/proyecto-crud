import jwt from "jsonwebtoken";


const  createToken =(payload)=>{
	 return new Promise((res,rej)=>{
  	jwt.sign(
  		payload,
  		
  		process.env.SECRET
  		,{
  		  expiresIn:"1d"
  		},(error,token)=>{
  			if(error)rej(error)
  				res(token)
  		})
  })
}

export default createToken;