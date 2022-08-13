import React from "react";
import Day from "./Day";
function Month({currentMonth}) {
	return (
		<div className="flex-1 grid grid-cols-7  ">
			{
				currentMonth.map(
					(row,i)=>(

						<React.Fragment key={i}>
							{
								row.map(
									(day,idx)=>(
										<Day day={day} key={idx} rowIndex={i}></Day>
									)

								)
							}


						</React.Fragment>
					)

     
				)

			} 
		</div>
	);
}

export default Month;