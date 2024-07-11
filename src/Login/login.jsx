import React, { useState } from 'react'
import style from "./login.module.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { validarLogin } from '../Utils/validarLogin'

export default function Login() {

    const navigate = useNavigate()
    const [login, setLogin] = useState({
        email: "",
        password: ""
    })

    function onChange(e){
        e.preventDefault()
        const {name, value} = e.target
        setLogin({...login, [name]: value})
    }

    async function submit(e){
        e.preventDefault()
        const validacion = validarLogin(login)
        if(validacion.length > 0){
            alert(validacion[0])
        } else {
            try {
                const {data} = await axios.post("http://localhost:3000/users/login", login)
                if(data.success){
                    setLogin({
                        email: "",
                        password: ""
                    })
                    localStorage.setItem("user", JSON.stringify(data.user))
                    alert("Login success")
                    navigate("/dashboard")
                } else {
                    alert(data.message)
                }
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <div>
            <form className={style.form}>
                <label className={style.label}>Correo</label>
                <input className={style.input} type="email" name="email" required value={login.email} onChange={onChange}/>
                <label className={style.label}>Password</label>
                <input className={style.input} type="password" name="password" required value={login.password} onChange={onChange}/>
                <input className={style.submit} type="submit" onClick={submit} value="Login"/>
            </form>
        </div>
    )
}
