
//funciones gloables


const valide =
//Validando correo
(mail:string, password:string):boolean => {
	if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(mail)) {
		/*Validando Contraseña 
  Requisitos:
  *Una mayúscula
  *Una minuscula
  *Un número
  *Un caracter especial
  */
		if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){6,15}$/.test(password)) {
			console.log("Rigth!");
			return true;
		}
	}
	console.log("incorrect");
	return false;
};
//variable


export { valide };
