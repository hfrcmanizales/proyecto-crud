import React,{useContext,ReactNode,createContext,useState,useEffect} from "react";
import axios from "axios";
import {enviaData,loginData,verifityData} from "../api/axios"
import Cookies from 'js-cookie';


interface ThemeContextType {
  getData: (data) => void;
  getLogin:(data)=>void;
  autentication:boolean;
  loading:boolean;
  remove:()=>void;

}



const userprovider = createContext<ThemeContextType|undefined>(undefined);

export const authUser = ()=>{
	const context = useContext(userprovider)
	if(!context){
		throw new Error("no existe el contexto")
	}
	return context;
}

// 5. Props del provider
interface ProviderUserProps {
  children: ReactNode;
}



function ProviderUser({children}:ProviderUserProps){

const [autentication,setAutentication]=useState(false)
const [loading,setLoading]=useState(true)



  const getData = async(data)=>{
     try{
       const res = await  enviaData(data)
      
       setAutentication(true)
       
     }catch(error){
     	console.log(error)
     }

  }

  const getLogin= async(data)=>{
   try{
      const res = await loginData(data)
      setAutentication(true)
      console.log(res)
     
     

   }catch(error){
   	console.log(error)
   }


  }

  useEffect(()=>{
    
    async function ver(){
       const cookies = Cookies.get();
      


        if(!cookies.token){
        setAutentication(false)
        setLoading(false)
        return 
        }
        
        try{
          const res =await verifityData()
          
          if(!res.data){
       	 setAutentication(false)
       	 setLoading(false)
       	 return
       }
        setAutentication(true)
         setLoading(false)
        }catch(error){
        	console.log(error)
        	setAutentication(false)
            setLoading(false)
        }
       
      
    }
    ver()

  },[])

/*remove token*/
 const remove = ()=>{
   Cookies.remove("token")
   setAutentication(false)
   setLoading(false)
 }

	return(
		<userprovider.Provider value={{
			getData,
			getLogin,
			autentication,
			loading,
      remove
		}}>
		{children}
		</userprovider.Provider>
		)
}

export default ProviderUser;