import React,{useEffect} from "react";
import "../App.css";
import { useForm } from 'react-hook-form';
import {authUser} from "../context/userContext"
import {useNavigate} from "react-router-dom"


type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterForm: React.FC = () => {

const { getData,autentication}=authUser()
   
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

  const onSubmit = (data: FormData) => {
    getData(data)
  };

return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Crear Cuenta</h2>

        <input
          type="text"
          placeholder="Nombre"
          {...register('name', { required: 'El nombre es obligatorio' })}
        />
        {errors.name && <span>{errors.name.message}</span>}

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

        <input
          type="password"
          placeholder="Confirmar contraseña"
          {...register('confirmPassword', {
            required: 'Confirma tu contraseña',
            validate: (value) =>
              value === watch('password') || 'Las contraseñas no coinciden',
          })}
        />
        {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default RegisterForm;