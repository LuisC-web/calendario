import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
	.then((userCredential) => {
		// Signed in 
		const user = userCredential.user;
		return user;
		// ...
	})
	.catch((error) => {
		const errorCode = error.code;
		const errorMessage = error.message;
		return {errorCode,errorMessage};
		
	});


signInWithEmailAndPassword(auth, email, password)
	.then((userCredential) => {
		// Signed in 
		const user = userCredential.user;
		// ...
		return user;
	})
	.catch((error) => {
		const errorCode = error.code;
		const errorMessage = error.message;
		return {errorCode, errorMessage};
	});

export {signInWithEmailAndPassword, createUserWithEmailAndPassword,auth};