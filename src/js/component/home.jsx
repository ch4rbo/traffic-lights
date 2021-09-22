import React, { useState } from "react";
//create your first component
const Home = () => {
	const [isRedOn, setisRedOn] = useState(false);
	const [isYellowOn, setisYellowOn] = useState(false);
	const [isGreenOn, setisGreenOn] = useState(false);

	const turnRedOn = () => {
		setisRedOn(true);
		setisYellowOn(false);
		setisGreenOn(false);
	};

	const turnYellowOn = () => {
		setisRedOn(false);
		setisYellowOn(true);
		setisGreenOn(false);
	};

	const turnGreenOn = () => {
		setisRedOn(false);
		setisYellowOn(false);
		setisGreenOn(true);
	};

	return (
		<div className="container">
			<div className="semaforo">
				<div
					className={isRedOn ? "red active" : "red"}
					onClick={turnRedOn}></div>
				<div
					className={isYellowOn ? "yellow active" : "yellow"}
					onClick={turnYellowOn}></div>
				<div
					className={isGreenOn ? "green active" : "green"}
					onClick={turnGreenOn}></div>
			</div>
		</div>
	);
};

export default Home;
