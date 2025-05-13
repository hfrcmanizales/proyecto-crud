import React from 'react';
import "./App.css"
import Header from "./componentes/header"
import RegisterForm from "./componentes/formulsrio"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProviderUser from "./context/userContext"
import LoginForm from "./componentes/login"
import Formulario from "./pages/crud"
import Mostrar from "./pages/mostrar"
import ProviderCrud from "./context/crudContext"
import ProtegerRutas from "./protegida/rutaProtegida"



function App() {
  return (
    <div>
    <ProviderUser>
    <ProviderCrud>
      <BrowserRouter>
       <Header/>
       < Routes>
         <Route path="/" element={<RegisterForm/>}/> 
         <Route path="/login" element={<LoginForm/>}/>
         
         <Route element={<ProtegerRutas/>}>
            <Route path="/formulario" element={<Formulario/>}/>
            <Route path="/formulario/:id" element={<Formulario/>}/>
            <Route path="/mostrar" element={< Mostrar/>}/>
         </Route>
         
       </ Routes>
      </BrowserRouter>
      </ProviderCrud>
   </ProviderUser>
    </div>
  );
}

export default App;