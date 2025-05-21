import React,{useEffect} from "react"
import "../App.css"
import {crudUser} from "../context/crudContext"
import { useForm } from 'react-hook-form';
import {useNavigate,useParams} from "react-router-dom";


type FormData = {
  tittle: string;
  description:string
};


function Formulario(){
   

  const params = useParams()

  useEffect(()=>{
    if(params._id){
     async function trae(){
       
         const res =await traerUna(params._id)
         setValue("tittle",res.tittle);
         setValue("description",res.description);
       

     }
     trae()
     }
    
  },[params._id])





   const {crearData,reload,traerUna,setReload,editarTarea} = crudUser()
   const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue
  } = useForm<FormData>();

 const onSubmit = async(data: FormData) => {
     if(params._id){
       await editarTarea(params._id,data)
       
     }else{
      await crearData(data)
     
     }
     setReload(!reload)
    navigate("/mostrar")
   
  };


	return(
		

		<div className="task-form-container">

          <form onSubmit={handleSubmit(onSubmit)} className="task-form">
             <input className="task-input"
             type="text"
             placeholder="Agrega Nombre "
             {...register('tittle', { required: 'El nombre es obligatorio' })}
             />
             {errors.tittle && <span>{errors.tittle.message}</span>}

             <input className="task-input"
             type="text"
             placeholder="Agrega Tarea "
             {...register('description', { required: 'la tarea es obligatorio' })}
             />
             {errors.description && <span>{errors.description.message}</span>}
            <button type="submit" className="task-button">Agregar</button>
         </form>
        </div>
        

		)
}

export default Formulario
