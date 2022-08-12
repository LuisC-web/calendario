import React from "react";

export default function Input({nameInput}) {
	return (
		<div className="flex-col flex">
			<label  htmlFor={nameInput} className=" text-color-text">{nameInput==="email"?"Correo":("password"===nameInput?"Contraseña":"Repetir contraseña")}</label>
			<input   className=" rounded-lg mt-2 pt-1 pb-1"
				type={nameInput==="email"?"email":"password"} 
				name={nameInput} id={nameInput}  autoFocus={nameInput==="email"?true:false}/>

		</div>
	);
}