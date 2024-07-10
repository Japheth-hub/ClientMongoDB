export function validarLogin(form){
  const {email, password} = form
  const alertas = []
  if(password.length < 8) alertas.push("Tu contraseña debe tener al menos 8 caracteres")
  if(email.length < 8) alertas.push("Tu contraseña debe tener al menos 8 caracteres")
  return alertas
}