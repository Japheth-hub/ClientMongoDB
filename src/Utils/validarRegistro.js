function validarRegistro(form){
    const {name, email, password} = form
    const regexNombre = /^[a-zA-Z\s]+$/
    const regexPassword = /^[a-zA-Z0-9]+$/
    const alertas = [];
    if(name.length === 0) alertas.push("El campo nombre no debe estar vacio")
    if(!regexNombre.test(name)) alertas.push("Solo debes ingresar letras")
    if(name.split(" ").length < 2) alertas.push("Debes ingresar tu nombre y apellido separados por un espacio")
    if(email.length === 0) alertas.push("El campo correo non debe de ir vacio")
    if(password.length < 8) alertas.push("Tu contraseña debe tener al menos 8 caracteres")
    if(!regexPassword.test(password)) alertas.push("Solo puedes ingresar letras y numeros en tu contraseña")
    return alertas
}

export default validarRegistro