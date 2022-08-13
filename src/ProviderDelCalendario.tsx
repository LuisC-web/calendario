import dayjs from "dayjs";
import React, { createContext, useState } from "react";


const ContextoDelCalendario=createContext(

);



const ProviderDelCalendario = ({children}) => {
	const [mes, setMes] = useState(dayjs().month());
	return (

		<ContextoDelCalendario.Provider
			value={{mes,setMes}}
  
		>
			{children}
		</ContextoDelCalendario.Provider>
	);
};

export {

	ProviderDelCalendario
};
export default ContextoDelCalendario;