import { useState } from "react"
import validarRegistro from "../Utils/validarRegistro"
import axios from "axios"
import style from "./login.module.css"

function Login(){

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
                console.log(respuesta)
                alert("Usuario creado correctamente")
            } catch (error) {
                console.log(error.message)
            }
        } else {
            alert(validacion[0])
        }
    }

    return (
        <>
        <form className={style.form}>
            <label>Nombre</label>
            <input type="text" name="name" required onChange={onChange}/>
            <label>Correo</label>
            <input type="email" name="email" required onChange={onChange}/>
            <label>Password</label>
            <input type="password" name="password" required onChange={onChange}/>
            <input type="submit" onClick={submit}/>
        </form>
        </>
    )
}

export default Login