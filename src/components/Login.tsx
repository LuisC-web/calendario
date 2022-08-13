import { border } from "@mui/system";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import { valide } from "../../global/global";
import { auth } from "../firebase/credenciales";
import ErrorF from "./ErrorF";


function Login () {
	const navigate=useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error,setError]=useState("");
	const login=(e)=>{
		e.preventDefault();	
		const validacion: boolean|string=valide(email, password);
		if
		( 	validacion===true	)
		{
			
			
			signInWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					// Signed in 
					const user = userCredential.user;
					console.log(user);
					// ...
					navigate("/home");
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					console.error(errorCode, errorMessage);
     
				});

		}else{

			setError(validacion);
			
		}
	};




	return (<div className="bg-color-base w-screen h-screen flex justify-center items-center ">

		<form className='bg-color-second md:w-1/4 p-4 rounded-md shadow-lg bg-opacity-50'>
			{error?(<ErrorF error={error}></ErrorF>):null}
			<div className='flex flex-col mt-2'>
				<label htmlFor="mail">Correo</label>
				<input className="mt-2 rounded-lg p-2" type="email" name="mail" id="mail"  value={email}
					onChange={e=>setEmail(e.target.value)}
					autoFocus/>

			</div>

			<div className='flex flex-col mt-2'>
				<label htmlFor="password">Contraseña</label>

				<input className="mt-2 rounded-lg p-2" type="password" name="password" id="password" 
					value={password} onChange={e=>setPassword(e.target.value)}  />
			</div>
	

			<button className='w-full bg-white p-2 mt-3 rounded-lg'  onClick={e=>login(e)} value="login">Loguearse</button>
			<p className=" text-center mt-2 font-semibold">O</p>
			<button className='w-full bg-white p-2 mt-3 rounded-lg' type='submit' onClick={()=>navigate("/register")} value="register">Registrar</button>



		</form>
	</div>
		
	);
}

export default Login;
