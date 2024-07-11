import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import style from "./dashboard.module.css"

export default function Dashboard() {

  const navigate = useNavigate()

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user")) 
    if(!user){
      navigate("/")
    }
  }, [])

  return (
    <div className={style.principalDashboard}>
      <h3 className={style.titleDashboard}>Dashboard</h3>
      <div className={style.contenedorDashboard}>
        <ul className={style.menu}>
          <li className={style.opcion}>Users</li>
          <li className={style.opcion}>Movies</li>
          <li className={style.opcion}>Comments</li>
        </ul>
        <div className={style.showInfoDashboard}>
          Contenedro donde iran los datos dependiendo la seleccion
        </div>
      </div>
    </div>
  )
}
