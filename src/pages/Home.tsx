import React, {useContext, useEffect, useState} from "react";
import CalendarHeader from "../components/CalendarHeader";
import Month from "../components/Month";
import SiderBar from "../components/SiderBar";
import  ContextoDelCalendario, {ProviderDelCalendario} from "../ProviderDelCalendario";
import { time } from "../../global/global";
import dayjs from "dayjs";

export default function Home() {
	const [currentMonth, setCurrentMonth] = useState(time());
	const {mes,setMes} = useContext(ContextoDelCalendario);


	useEffect(() => {
		setCurrentMonth(time(mes));
	}, [mes]);
 

	return (
	


		<div className="h-screen grid grid-cols-4">

			<CalendarHeader/>
			<div className="order-first col-start-1 col-end-4 flex flex-col flex-1  m-5 ">
				<h1 className="text-center font-bold uppercase">
					{dayjs(new Date(dayjs().year(),mes)).format("MMMM YYYY")}
				</h1>
				<Month  currentMonth={currentMonth}></Month>
			</div>
		</div>
   
		


	);
}