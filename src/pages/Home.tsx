import React, {useContext, useState,useEffect} from "react";
import dayjs from "dayjs";
import CalendarHeader from "../components/CalendarHeader";
import Month from "../components/Month";
import SiderBar from "../components/SiderBar";
import GlobalContext from "../GlobalContext";
import ContextWrapper from "./ContextWrapper";

export default function Home() {

	const time =(month= dayjs().month())=>
	{
		console.log(month);
		const year=dayjs().year();
		const firstDayOfTheMonth=dayjs(new Date(year,month,0)).day();
		let currentMonthCount=0-firstDayOfTheMonth;
		const daysMatrix=new Array(5).fill([]).map(()=>{
			return new Array(7).fill(null).map(()=>{
				currentMonthCount++;
				return dayjs(new Date(year,month,currentMonthCount));
			});

		});
		
		return daysMatrix;
	};

	const [currentMonth, setCurrentMonth] = useState(time());
	const {monthIndex}=useContext(GlobalContext);
	useEffect(() => {
   
		setCurrentMonth(time(monthIndex));
 
	}, [monthIndex]);
 
	return (
		<div className="h-screen grid grid-cols-4 ">
			 <CalendarHeader/>
			<div className=" flex flex-1 col-start-2 col-end-5">
				<SiderBar></SiderBar>
				<Month  currentMonth={currentMonth}></Month>
			</div>
		</div>

	);
}