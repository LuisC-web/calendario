import dayjs from "dayjs";
import React,{useState} from "react";
import GlobalContext from "./GlobalContext";
function ContextWrapper(props) {
	const [montnIndex, setMonthIndex]=useState(dayjs().month());
	return (
		<GlobalContext.Provider value={{montnIndex, setMonthIndex}}>
			{props.children}
		</GlobalContext.Provider>
	);}

export default ContextWrapper;