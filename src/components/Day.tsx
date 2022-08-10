import dayjs from "dayjs";
import React from "react";

function Day({day,rowIndex}) {
	const getCurrentDay = ()=>{

		return day.format("DD-MM-YY")===dayjs().format("DD-MM-YY")?"bg-blue text-white rounded-full w-7":"";
	};

	return (
		<div className="border border-gray cursor-pointer">
			<header className="flex flex-col items-center">
				{rowIndex===0&&	(<p className="text-sm mt-1">
					{day.format("ddd").toUpperCase()}
				</p>)}
				<p className={`text-sm p-1 my-1 text-center ${getCurrentDay()}`}>
					{day.format("DD")}
				</p>

    
			</header>

		</div>
	);
}

export default Day;