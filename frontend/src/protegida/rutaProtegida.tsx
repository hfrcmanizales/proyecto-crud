import {Navigate,Outlet} from "react-router-dom";
import {authUser} from "../context/userContext"

function ProtegerRutas(){
    
    const {autentication,loading}=authUser()

    if(loading){
    	
    	return <h2>Loading...</h2>

    }
   if(!autentication&&!loading)return <Navigate to="/login" replace/>
	return(
		<>
		<Outlet/>
		</>
		)
     
		
}

export default ProtegerRutas;