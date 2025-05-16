import React,{useEffect} from "react";
import "../App.css";
import { useForm } from 'react-hook-form';
import {authUser} from "../context/userContext"
import {useNavigate} from "react-router-dom"

type FormData = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {

const {getLogin,autentication }=authUser()

const navigate = useNavigate()
  
  useEffect(()=>{
    if(autentication){
      navigate("/formulario")
    }
  },[autentication])

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit =  (data: FormData) => {
     getLogin(data)
     

  };

return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>

       
        <input
          type="email"
          placeholder="Correo electrónico"
          {...register('email', {
            required: 'El correo es obligatorio',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Correo inválido',
            },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}

        <input
          type="password"
          placeholder="Contraseña"
          {...register('password', { required: 'La contraseña es obligatoria' })}
        />
        {errors.password && <span>{errors.password.message}</span>}

        
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default LoginForm;