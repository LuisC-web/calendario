/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from "react";
import ContextoDelCalendario from "../ProviderDelCalendario";

function AgregarEvento({ agregarEventos, setAgregarEventos }) {
	const { diaSelecionado, dispatchEventos, eventoSelecionado,setEventoSelecionado } = useContext(
		ContextoDelCalendario
	);
	const [titulo, setTitulo] = useState(
		eventoSelecionado ? eventoSelecionado.titulo : ""
	);
	const [descripcion, setDescripcion] = useState(
		eventoSelecionado ? eventoSelecionado.descripcion : ""
	);
	useEffect(() => {
		if(eventoSelecionado!=null){

   
			setDescripcion(eventoSelecionado.descripcion);
			setTitulo(eventoSelecionado.titulo);
  
		}
		
	}, [eventoSelecionado]);
 
	const [label, setLabel] = useState("Hello");
 
	const agregarEvento = (e:React.FormEvent<EventTarget>) => {
		e.preventDefault();
		console.log(eventoSelecionado);
		const estructuraDelEvento = {
			titulo: titulo,
			descripcion: descripcion,
			label,
			day:0,
			id:0
			
		};
		if (eventoSelecionado) {
			console.log(estructuraDelEvento);
			estructuraDelEvento.day= eventoSelecionado.day;
			estructuraDelEvento.id= eventoSelecionado.id;
			dispatchEventos({ type: "update", payload: estructuraDelEvento });
			setEventoSelecionado(null);

		} else {
			dispatchEventos({ type: "push", payload: estructuraDelEvento });
			estructuraDelEvento.day= diaSelecionado.valueOf();
			estructuraDelEvento.id= Date.now();
		}
		setAgregarEventos(false);
		setTitulo("");
		setDescripcion("");
		setLabel("");
	};
	return (
		<div
			className={`agregar-evento bg-color-base flex  justify-around items-center flex-col rounded-lg 
   ${agregarEventos ? "opacity" : "no-opacity"}`}
		>
			<div className="flex flex-col">
				<h1 className="">Agregar evento</h1>

				<input
					className=""
					value={titulo}
					onChange={(e) => setTitulo(e.target.value)}
					type="text"
				/>
				<p className="uppercase">
					{diaSelecionado != null ? diaSelecionado.format("dddd,MMMM DD") : ""}
				</p>
			</div>
			
			<textarea
				name=""
				id=""
				cols={20}
				rows={5}
				maxLength={100}
				value={descripcion}
				onChange={(e) => setDescripcion(e.target.value)}
			></textarea>

			<button onClick={(e) => agregarEvento(e)}>Guardar</button>
			{eventoSelecionado?<button onClick={() => {
				dispatchEventos({ type: "delete", payload: eventoSelecionado });
				setAgregarEventos(false);


			}}>Eliminar</button>:null}
		</div>
	);
}

export default AgregarEvento;
