import React, { useContext } from "react";
import calendar from "../assets/calendar.svg";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import GlobalContext from "../GlobalContext";
function CalendarHeader() {
	const {monthIndex,setMonthIndex}=useContext(GlobalContext);
	const aumentarMes=()=>{

		setMonthIndex(monthIndex+1);

	};
	const disminuirMes=()=>{

		setMonthIndex(monthIndex-1);

	};
	return (
		<header className="flex items-center">
			<img src={calendar} alt="calendar" className="mr-2 w-12 h-12">

			</img>
			<h1 className="mr-10 text-xl text-gray fond-bold">

    Calendario
			</h1>
			<button className="border rounded py-2 px-4">Hoy</button>
			<button><span className="material-icons-outlined cursor-pointer text-gray mx">
				<ChevronLeftIcon onClick={()=>disminuirMes()}></ChevronLeftIcon>
			</span></button>
			<button><span className="material-icons-outlined cursor-pointer text-gray mx">
				<ChevronRightIcon onClick={()=>aumentarMes()}></ChevronRightIcon>
			</span></button>
		</header>

	);
}

export default CalendarHeader;