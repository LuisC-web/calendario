import React from "react";
import {useNavigate} from "react-router-dom";
import Input from "./Input";
function Login () {
	const navigate=useNavigate();
	const login=(e)=>{
		e.preventDefault();	
		navigate("/home");
	};

	const registrarse=(e)=>{
		e.preventDefault();	
		navigate("/register");
	};


	return (
		<div className="bg-color-base w-screen h-screen flex justify-center items-center ">
			<form className=" bg-color-second md:w-1/4 p-4 rounded-md shadow-lg bg-opacity-50">
				<Input nameInput="email"></Input>
				<Input nameInput="password"></Input>

				<button className="bg-white  mt-2 pt-1 pb-1 rounded-lg w-full "  type="submit" onClick={e=>login(e)}>Loguearse</button>
				<p className=" text-center mt-1 font-semibold">O</p>
				<button className="bg-white  mt-2 pt-1 pb-1 rounded-lg w-full "  type="submit" onClick={e=>registrarse(e)}>Registrarse</button>			</form>

		</div>
		
	);
}

export default Login;
