import { useState } from "react"
import validarRegistro from "../Utils/validarRegistro"
import axios from "axios"
import style from "./register.module.css"

export default function Register(){

    const [registro, setRegistro] = useState({
        name: "",
        email: "",
        password: ""
    })

    function onChange(e){
        e.preventDefault()
        const {name, value} = e.target
        setRegistro({...registro, [name]: value})
    }

    async function submit(e){
        e.preventDefault()
        const validacion = validarRegistro(registro)
        if(validacion.length === 0){
            try {
                const respuesta = await axios.post("http://localhost:3000/users", registro)
                console.log(respuesta.data)
                alert("Usuario creado correctamente favor de inicar sesion")
                setRegistro({
                    name: "",
                    email: "",
                    password: ""
                })
            } catch (error) {
                alert(error.response.data.message)
            }
        } else {
            alert(validacion[0])
        }
    }

    return (
        <>
        <form className={style.form}>
            <label className={style.label}>Nombre</label>
            <input className={style.input} type="text" name="name" required value={registro.name} onChange={onChange}/>
            <label className={style.label}>Correo</label>
            <input className={style.input} type="email" name="email" required value={registro.email} onChange={onChange}/>
            <label className={style.label}>Password</label>
            <input className={style.input} type="password" name="password" required value={registro.password} onChange={onChange}/>
            <input className={style.submit} type="submit" onClick={submit} value="Registrar"/>
        </form>
        </>
    )
}