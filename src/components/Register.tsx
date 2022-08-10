import React, {useState} from "react";
import {valide} from "../../global/global";
import {useNavigate} from "react-router-dom";
function Register() {
	const navigate=useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");
	const registerUser = (e:any) =>{
		e.preventDefault();	
		navigate("/home");

		if (valide(email, password)) {
			if (!(password===repeatPassword)) {
				console.log("Constraseñas no coinciden");
			}

		}
 


	};

	return (
		<form className='register'>

			<div className='mail'>
				<label htmlFor="mail">Correo<input type="text" name="mail" id="mail"  value={email || "example@example.com"}
					onChange={e=>setEmail(e.target.value)}
					autoFocus/></label>


			</div>

			<div className='password'>
				<label htmlFor="password">Contraseña<input type="password" name="password" id="password" 
					value={password} onChange={e=>setPassword(e.target.value)}  /></label>


			</div>
			<div className='password-repeat'>
				<label htmlFor="password-repeat">Repetir contraseña<input type="password" name="password-repeat" id="password-repeat"
					value={repeatPassword}
					onChange={e=>setRepeatPassword(e.target.value)}
    
				/></label>


			</div>

			<button className='submit-register' type='submit' onClick={e=>registerUser(e)} value="register">Registrar</button>



		</form>
	);
}

export default Register;