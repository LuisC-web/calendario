import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import { time } from "../../global/global";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ContextoDelCalendario from "../ProviderDelCalendario";

function CalendarioPequenio() {
	const [indiceMesCalendarioPequenio,setIndiceMesCalendarioPequenio] =useState(dayjs().month());
	const [cambioDeMes,setCambioDeMes]=useState(time());
	const {setCalendarioPequenio,setdiaSelecionado,setAgregarEventos,diaSelecionado}=useContext(ContextoDelCalendario);

	useEffect(() => {
		setCambioDeMes(time(indiceMesCalendarioPequenio));
	}, [indiceMesCalendarioPequenio]);
 	const disminuirMes=()=>{

		setIndiceMesCalendarioPequenio(indiceMesCalendarioPequenio-1);
	};
	const aumentarMes=()=>{

		setIndiceMesCalendarioPequenio(indiceMesCalendarioPequenio+1);
	};
	const resetearCalendario=()=>{
		console.log(dayjs().month());

		setMes(dayjs().month());

	};
	const obtenerDia=(dia)=>{
		const formato="DD-MM-YY";
		const diaHoy= dayjs().format(formato);
		const diaRelativo=dia.format(formato);
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

		<div className="mt-9">
			<header className="flex justify-between">

				<p className="text-gray-500 font-bold uppercase">
					{dayjs(new Date(dayjs().year(), indiceMesCalendarioPequenio)).format("MMMM YYYY")}
     
				</p>
				<div className="mb-3">
					
					<button><span className="material-icons-outlined cursor-pointer text-gray mx">
						<ChevronLeftIcon onClick={()=>disminuirMes()}></ChevronLeftIcon>
					</span></button>
					<button><span className="material-icons-outlined cursor-pointer text-gray mx">
						<ChevronRightIcon onClick={()=>aumentarMes()}></ChevronRightIcon>
					</span></button>
				</div>
			</header>
			<div className="grid grid-cols-7 grid-rows-6">
				{
					cambioDeMes[0].map((day,i)=>(
						<span key={i} className="uppercase">
							{day.format("dd").charAt(0)}
       
						</span>

					))

				}
				{cambioDeMes.map((row,i)=>(
					<React.Fragment key={i}>
     
						{row.map((day,idx)=>(
							<button key={idx} 
								onClick={()=>{
									setCalendarioPequenio(indiceMesCalendarioPequenio);
									setdiaSelecionado(day);
									setAgregarEventos(true);
								}
       
								}
								className={`py-1 w-full ${obtenerDia(day)}`}>
								<span className="text-small">{day.format("D")}</span>
							</button>

						))}
					</React.Fragment>



				))}
			</div>
   
		</div>
	);
}

export default CalendarioPequenio;