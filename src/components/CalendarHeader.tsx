import React, { useContext } from "react";
import calendar from "../assets/calendar.svg";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ContextoDelCalendario from "../ProviderDelCalendario";
function CalendarHeader() {
	const {mes,setMes}=useContext(ContextoDelCalendario);
	const disminuirMes=()=>{

		setMes(mes-1);
	};
	const aumentarMes=()=>{

		setMes(mes+1);
	};

	return (
		<header className="flex flex-col justify-center items-center">
			<img src={calendar} alt="calendar" className="mr-2 w-12 h-12">

			</img>
			<h1 className="mr-10 text-xl text-gray fond-bold">

    Calendario
			</h1>
			
			<div>
				<button className="border rounded py-2 px-4">Hoy</button>
				<button><span className="material-icons-outlined cursor-pointer text-gray mx">
					<ChevronLeftIcon onClick={()=>disminuirMes()}></ChevronLeftIcon>
				</span></button>
				<button><span className="material-icons-outlined cursor-pointer text-gray mx">
					<ChevronRightIcon onClick={()=>aumentarMes()}></ChevronRightIcon>
				</span></button>
			</div>
			<h1>Hello</h1>
		</header>

	);
}

export default CalendarHeader;