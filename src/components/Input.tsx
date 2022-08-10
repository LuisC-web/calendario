import React from "react";
import PropTypes from "prop-types";

function Input({nameInput}) {
	return (
		<div className="flex-col flex">
			<label  htmlFor={nameInput} className=" text-color-text">{nameInput==="email"?"Correo":"Contraseña"}</label><input   className=" rounded-lg mt-2 pt-1 pb-1"
				type={nameInput==="email"?"email":"password"} name={nameInput} id={nameInput}  autoFocus={nameInput==="email"?true:false}/>

		</div>
	);
}
export default Input;
Input.propTypes = {
	nameInput: PropTypes.string
};

