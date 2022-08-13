
//funciones gloables

import dayjs from "dayjs";

import es from "dayjs/locale/es";
dayjs.locale(es);
const valide =
//Validando correo
(mail:string, password:string):boolean|string => {
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
		else{
			return "Debe tener una mayúscula, minuscula, número y caracter especial";
		}
	}
	return "El correo es inválido";
};
//obtener tiempo

const time =(month= dayjs().month())=>
{
	
	const year=dayjs().year();
	const firstDayOfTheMonth=dayjs(new Date(year,month,0)).day();
	let currentMonthCount=0-firstDayOfTheMonth;
	const daysMatrix=new Array(5).fill([]).map(()=>{
		return new Array(7).fill(null).map(()=>{
			currentMonthCount++;
			return dayjs(new Date(year,month,currentMonthCount));
		});
  
	});
 
	console.log(daysMatrix);
	return daysMatrix;
};


export { valide,time};
