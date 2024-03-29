import React, {useState} from "react";
import {valide} from "../../global/global";
import {useNavigate} from "react-router-dom";
import { auth } from "../firebase/credenciales";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { Info } from "@mui/icons-material";
import ErrorF from "./ErrorF";


function Register() {
	const navigate=useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");
 	const [error,setError]=useState("");

	const registerUser = (e:any) =>{
		e.preventDefault();	
		const validacion: boolean|string=valide(email, password);

		if (valide(email, password)===true&&password===repeatPassword) {
			createUserWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					// Signed in 
					const user = userCredential.user;
					navigate("/home");
					console.info(user);
					// ...
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					// ..
					console.error(errorCode, errorMessage);
    
				});

		}
		else if(validacion.length >0){
   			setError(validacion);
		}	else {
			setError("Constraseña no coinciden");
		}


	};

	return (
		<div className="bg-color-base w-screen h-screen flex justify-center items-center ">

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
				<div className='flex flex-col mt-2'>
					<label htmlFor="password-repeat">Repetir contraseña</label>
					<input className="mt-2 rounded-lg p-2" type="password" name="password-repeat" id="password-repeat"
						value={repeatPassword}
						onChange={e=>setRepeatPassword(e.target.value)}
    
					/>

				</div>

				<button className='w-full bg-white p-2 mt-3 rounded-lg' type='submit' onClick={e=>registerUser(e)} value="register">Registrar</button>
				<p className=" text-center mt-2 font-semibold">O</p>
				<button className='w-full bg-white p-2 mt-3 rounded-lg'  onClick={()=>navigate("/")} value="login">Loguearse</button>




			</form>
		</div>
		
	);
}

export default Register;