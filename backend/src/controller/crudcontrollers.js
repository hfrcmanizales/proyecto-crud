import Crud from "../models/crudSchema.js"

export const createCrud = async(req,res)=>{
	const {tittle,description,date}=req.body;
	try{

     const saveTaks = new Crud({
     	tittle,
     	description,
     	date,
     	user:req.user.id
     })
    
    const tarea = await saveTaks.save();
    res.json(tarea)

	}catch(error){
		console.log(error)
	}
}

export const getTasks = async(req,res)=>{
	try{
       const taskNuevo = await Crud.find({
		user:req.user.id
	}).populate("user")
	return res.json(taskNuevo)
	}catch(error){
		console.log(error)
	}
}

export const oneCrud = async(req,res)=>{
	try{
     const unaTarea = await Crud.findById(req.params.id).populate("user");
     if(!unaTarea)return res.status(400).json({message:"no se encontro la tarea"})
     res.json(unaTarea)

	}catch(error){
		console.log(error)
	}
}

export const putCrud = async(req,res)=>{
	try{
       const actualizar  = await Crud.findByIdAndUpdate(req.params.id,req.body,{
       	new:true
       });
       if(!actualizar)return res.status(400).json({message:"tarea no se actualizo"})
       res.send("actualizado")
	}catch(error){
		console.log(error)
	}
}

export const deleteCrud = async(req,res)=>{
	try{
      const borrar = await Crud.findByIdAndDelete(req.params.id);
      if(!borrar)return res.status(400).json({message:"tarea no se borro"})
      	res.send("borrada")
	}catch(error){
		console.log(error)
	}
}