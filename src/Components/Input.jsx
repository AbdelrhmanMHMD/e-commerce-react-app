import React, { useEffect, useRef } from "react";

const Input = () => {
	const inputRef = useRef();
	const intervalRef = useRef();
	useEffect(() => {
		inputRef.current.focus();
		intervalRef.current = setInterval(() => {
			console.log(`interval`);
		}, 1000);
		return () => {
			clearInterval(intervalRef.current);
		};
	}, []);
	return (
		<>
			<h1>
				Name <input ref={inputRef} type="text" />
			</h1>
			<button
				onClick={() => clearInterval(intervalRef.current)}
				className="btn btn-primary"
			>
				Stop interval
			</button>
		</>
	);
};

export default Input;
