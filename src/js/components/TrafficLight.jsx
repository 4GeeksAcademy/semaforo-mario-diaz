import React, { useState } from "react";

const TrafficLight = () => {
	const [selectedColor, setSelectedColor] = useState("red");

	return (
		<div className="text-center mt-5">
			<div className="traffic-top"></div>

			<div className="traffic-light-body">
				
				<div 
					onClick={() => setSelectedColor("red")} 
					className={"light red" + (selectedColor === "red" ? " glow" : "")}
				></div>

				<div 
					onClick={() => setSelectedColor("yellow")} 
					className={"light yellow" + (selectedColor === "yellow" ? " glow" : "")}
				></div>

				<div 
					onClick={() => setSelectedColor("green")} 
					className={"light green" + (selectedColor === "green" ? " glow" : "")}
				></div>

			</div>
		</div>
	);
};

export default TrafficLight;
