import React, {useContext, useState} from "react";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";
import CalendarHeader from "../components/CalendarHeader";
import Month from "../components/Month";
import SiderBar from "../components/SiderBar";
import GlobalContext from "../GlobalContext";
export default function Home() {

	const time =(month= dayjs().month())=>
	{
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
	const {monthIndex,setMonthIndex}=useContext(GlobalContext);
	return (
		<>
			<div className="h-screen flex flex-col">
				<CalendarHeader/>
				<div className=" flex flex-1">
					<SiderBar></SiderBar>
					<Month currentMonth={currentMonth}></Month>
				</div>

			
 
			</div>

		</>
	);
}