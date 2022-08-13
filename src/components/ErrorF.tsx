import React from "react";

function ErrorF({error}) {
	return (
		<p className="bg-red text-white text-center p-2 rounded-lg font-bold uppercase animate-pulse">{error}</p>	);
}

export default ErrorF;