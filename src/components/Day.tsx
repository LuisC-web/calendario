import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import ContextoDelCalendario from "../ProviderDelCalendario";

function Day({day,rowIndex}) {
	const [dayEvents,setDayEvents]=useState([]);

	const {setAgregarEventos,diaSelecionado,setdiaSelecionado,guardarEventos,setEventoSelecionado}=useContext(ContextoDelCalendario);


	useEffect(() => {
		const eventos=guardarEventos.filter(evento=>(
			dayjs(evento.day).format("DD-MM-YY")===day.format("DD-MM-YY"))
  
		);
		
		setDayEvents(eventos);
  
	}, [guardarEventos,day]);
	const getCurrentDay = ()=>{
		const formato="DD-MM-YY";
		const diaHoy= dayjs().format(formato);
		const diaRelativo=day.format(formato);
		const diaSelect=diaSelecionado&&diaSelecionado.format(formato);
		if(diaHoy===diaRelativo){

			return "bg-color-base rounded-full text-white";
		}else if(diaSelect===diaRelativo){
			return "bg-blue-light rounded-full text-color-base font-bold";
		}else{
			return "  ";
		}

  
	};
	
	return (
		<div className="border border-gray cursor-pointer">
			<header className="flex flex-col items-center">
				{rowIndex===0&&	(<p className="text-sm mt-1">
					{day.format("ddd").toUpperCase()}
				</p>)}
				<p onClick={
					()=>{    
						setAgregarEventos(true);
     									setdiaSelecionado(day);
					}
				} className={`text-sm p-1 my-1 text-center ${getCurrentDay()}` }>
					{day.format("DD")}
				</p>

    
				{dayEvents.map((evento,indice)=>(

					<div	className="bg-color-base w-3/4 text-center p-1 text-white rounded-lg" 
						onClick={()=>{setEventoSelecionado(evento);
							setAgregarEventos(true);
						}}
						key={indice}
						id={indice}
					>
						{evento.titulo}
					</div>

				))}
			</header>


		</div>
	);
}

export default Day;