import React from "react";
import {useNavigate} from "react-router-dom";
import Input from "./Input";
function Login () {
	const navigate=useNavigate();
	const login=(e)=>{
		e.preventDefault();	
		navigate("/home");
	};


	return (
		<div className="bg-color-base w-screen h-screen flex justify-center items-center ">
			<form className=" bg-color-second p-4 rounded-md shadow-lg bg-opacity-50">

				<Input nameInput="email"></Input>

				<Input nameInput="password"></Input>

			
				<button className="bg-white  mt-2 pt-1 pb-1 rounded-lg w-full "  type="submit" onClick={e=>login(e)}>Loguearse</button>
			

			</form>

		</div>
		
	);
}

export default Login;
