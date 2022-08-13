import dayjs from "dayjs";
import React, { useContext, useState } from "react";
import ContextoDelCalendario from "../ProviderDelCalendario";
import Evento from "./Evento";
import {colors} from "../../global/global";
function AgregarEvento({agregarEventos,setAgregarEventos}) {
	const [titulo,setTitulo]=useState("");
	const [descripcion,setDescripcion]=useState("");
	const [label,setLabel]=useState("");
	const {diaSelecionado,dispatchEventos}=useContext(ContextoDelCalendario);
	const agregarEvento=(e)=>{
		e.preventDefault();
		const estructuraDelEvento={
			titulo:titulo,
			descripcion:descripcion,
			label,
			day:diaSelecionado.valueOf(),
			id: Date.now()
		};
		dispatchEventos({type:"push",payload:estructuraDelEvento});
		setAgregarEventos(false);
	};
	return (
		<div
			className={`agregar-evento bg-color-base flex  justify-around items-center flex-col rounded-lg 
   ${agregarEventos?"opacity":"no-opacity"}`}
		>
			<div className="flex flex-col">

				<h1 className="">Agregar evento</h1>

				<input className="" value={titulo} onChange={e=>setTitulo(e.target.value)} type="text" />
				<p className="uppercase">
					{diaSelecionado!=null?diaSelecionado.format("dddd,MMMM DD"):""}
				</p>
			</div>
			<div>
				{colors.red}
			</div>
	
			<textarea name="" id="" cols="20" rows="5" maxLength="100"></textarea>


			<button onClick={(e)=>agregarEvento(e)}>Guardar</button>
		</div>
	);
}

export default AgregarEvento;