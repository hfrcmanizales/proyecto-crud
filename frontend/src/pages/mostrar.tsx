import React,{useEffect,useState} from "react"
import "../App.css"
import {crudUser} from "../context/crudContext"
import {Link} from "react-router-dom"

function Mostrar(){

  const {obtenerTarea,info,eliminarTarea}=crudUser()

  useEffect(()=>{
     obtenerTarea()
  },[])


	return(
        <div className="crud">
         {
           info.map((ele)=>(
            <div className="card" key={ele.id}>
              <div className="card-content">
                 <h2 className="card-title">{ele.tittle}</h2>
                 <p className="card-description">
                  {ele.description}
                 </p>
                 <span>{ele.date}</span>
              </div>
              <div className="footer">
                    <div className="card-footer">
                     <Link className="card-button" to={`/formulario/${ele._id}`}>editar</Link>
                    </div>
                   <div className="card-footer">
                      <button onClick={()=>eliminarTarea(ele._id)} className="card-button2">borrar</button>
                   </div>
             </div>
        </div>

             ))
         }
        </div>
		)
}

export default Mostrar;
