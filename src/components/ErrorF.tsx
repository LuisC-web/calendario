import React from "react";
type Props={
error:string


}
function ErrorF(props:Props) {
	return (
		<p className="bg-red text-white text-center p-2 rounded-lg font-bold uppercase animate-pulse">{props.error}</p>	);
}

export default ErrorF;