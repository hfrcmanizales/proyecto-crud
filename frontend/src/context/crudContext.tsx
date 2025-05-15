import React,{useContext,ReactNode,createContext,useState} from "react";
import axios from "axios";
import {enviaCrud,traerUnoCrud,editarCrud,traeCrud,eliminarCrud} from "../api/crudData"



interface ThemeContextType {
  crearData: (data) => void;
  obtenerTarea:()=>void;
  info: User[];
  eliminarTarea:(id)=>void;
  editarTarea:(id,data)=>void;
  traerUna:(_id)=>Promise<User>,
}

type User = {
  tittle:string;
  description:string;
  date:number;
  _id:string|number
};


const crudprovider = createContext<ThemeContextType|undefined>(undefined);

export const crudUser = ()=>{
	const context = useContext(crudprovider)
	if(!context){
		throw new Error("no existe el contexto")
	}
	return context;
}

// 5. Props del provider
interface ProviderUserProps {
  children: ReactNode;
}



function ProviderCrud({children}:ProviderUserProps){

  const [info,setInfo]=useState<User[]>([])


//crear tarea//
  const crearData = async(data)=>{
     const res = await  enviaCrud(data)
     console.log(res.data)
  }

//obtener todas las tareas y mostrar//
  
 const obtenerTarea = async()=>{
    const response = await traeCrud()
    console.log(response)
    setInfo(response.data)
 }

/*borrar tarea*/
   
   const eliminarTarea = async(id:string|number)=>{
     const res = await eliminarCrud(id)
     setInfo(info.filter((ele)=>ele._id!==id))
   }

/*ediatar tareas*/

const editarTarea = async(id,data)=>{
    try{
     const res = await editarCrud(id,data)
     console.log(res)
    }catch(error){
      console.log(error)
    }
}   


/*traer una tarea*/

const traerUna = async(_id):Promise<User>=>{
  const res = await traerUnoCrud(_id)
  return res.data
}



	return(
		<crudprovider.Provider value={{
			 crearData,
			 obtenerTarea,
			 info,
       eliminarTarea,
       editarTarea,
       traerUna

		}}>
		{children}
		</crudprovider.Provider>
		)
}


export default ProviderCrud;