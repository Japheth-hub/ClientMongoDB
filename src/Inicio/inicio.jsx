import React, { useState } from 'react'
import style from "./inicio.module.css"
import Login from '../Login/login'
import Register from '../Register/register'

export default function Inicio() {

  const [opcion, setOpcion] = useState(true)

  return (
    <div className={style.incio}>
      <h1 className={style.title}>Practicas Nestjs/TypeScript/MongoDB/Reactjs</h1>
      <div className={style.contendeorPrincipal}>
        <ul className={style.opciones}>
          <li className={`${style.opcion} ${opcion && style.active}`} onClick={()=>{setOpcion(true)}}>Iniciar Sesion</li>
          <li className={`${style.opcion} ${!opcion && style.active}`} onClick={()=>{setOpcion(false)}}>Registrarse</li>
        </ul>
        <div className={style.contenedorSecundario}>
          {opcion 
            ? <Login />
            : <Register />
          }
        </div>
      </div>
    </div>
  )
}
