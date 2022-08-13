import React, { useContext, useState } from "react";
import calendar from "../assets/calendar.svg";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ContextoDelCalendario from "../ProviderDelCalendario";
import ControlPointDuplicateIcon from "@mui/icons-material/ControlPointDuplicate";
import AgregarEvento from "./AgregarEvento";
import dayjs from "dayjs";
import CalendarioPequenio from "./CalendarioPequenio";
function CalendarHeader() {
	const {mes,setMes,setAgregarEventos,agregarEventos}=useContext(ContextoDelCalendario);
	const disminuirMes=()=>{

		setMes(mes-1);
	};
	const aumentarMes=()=>{

		setMes(mes+1);
	};
	const resetearCalendario=()=>{
		console.log(dayjs().month());

		setMes(dayjs().month());

	};

	return (
		<header className="flex flex-col justify-center items-center ">
			<CalendarioPequenio></CalendarioPequenio>
			<div className="mb-3">
				<button onClick={()=>resetearCalendario()} className="border rounded py-2 px-4">Hoy</button>
				<button><span className="material-icons-outlined cursor-pointer text-gray mx">
					<ChevronLeftIcon onClick={()=>disminuirMes()}></ChevronLeftIcon>
				</span></button>
				<button><span className="material-icons-outlined cursor-pointer text-gray mx">
					<ChevronRightIcon onClick={()=>aumentarMes()}></ChevronRightIcon>
				</span></button>
			</div>
			<button onClick={()=>setAgregarEventos(!agregarEventos)} className="bg-color-base p-2 
   rounded-lg">Agregar eventos</button>
	
			<AgregarEvento agregarEventos={agregarEventos} setAgregarEventos={setAgregarEventos} ></AgregarEvento>
	
		</header>

	);
}

export default CalendarHeader;

function days() {
	throw new Error("Function not implemented.");
}
