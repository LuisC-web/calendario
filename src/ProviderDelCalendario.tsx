import dayjs from "dayjs";
import React, { createContext, useEffect, useReducer, useState } from "react";
interface State{
	titulo: string,
			descripcion: string,
			label:string,
			day:number,
			id:number
}

const ContextoDelCalendario=createContext(
	{

  
	}


);
function guardarEventosReducer(state: any[],{type,payload}: any){
	switch (type) {
	case "push":
		return [...state,payload];
  
		break;
	case "update":
		return state.map((evento: { id: unknown; })=>evento.id===payload.id?payload:evento);
	case "delete":
		return state.filter((evento: { id: unknown; })=>evento.id!=payload.id);

	default:
		throw new Error();
	}

}
function inicializarEventos(){

	const storageEvents= localStorage.getItem("elementosGuardados")||"";
	const parsearEventos= !storageEvents?JSON.parse(storageEvents):[];
	return parsearEventos;
}

// eslint-disable-next-line react/prop-types
const ProviderDelCalendario = ({children}): JSX.Element => {
	const [mes, setMes] = useState(dayjs().month());
	const [calendarioPequenio,setCalendarioPequenio]=useState(null);
	const [diaSelecionado,setdiaSelecionado]=useState(dayjs());
	const [agregarEventos,setAgregarEventos]=useState(false);
	const [guardarEventos, dispatchEventos]=useReducer(guardarEventosReducer,[],inicializarEventos);

	const [eventoSelecionado,setEventoSelecionado]=useState(null);

	useEffect(()=>{
		if(calendarioPequenio!==null){

			setMes(calendarioPequenio);
		}
  
	},[calendarioPequenio]);
	useEffect((


	)=>{
		localStorage.setItem("elementosGuardados",JSON.stringify(guardarEventos));
  
	},[guardarEventos]);
	return (

		<ContextoDelCalendario.Provider
			value={{mes,setMes,calendarioPequenio,setCalendarioPequenio,diaSelecionado,setdiaSelecionado,agregarEventos,setAgregarEventos,dispatchEventos,guardarEventos,eventoSelecionado,setEventoSelecionado}}
  
		>
			{children}
		</ContextoDelCalendario.Provider>
	);
};

export {

	ProviderDelCalendario
};
export default ContextoDelCalendario;