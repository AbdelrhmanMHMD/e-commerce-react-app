import React from "react";

const CountBtn = ({ increment }) => {
	console.log(`CountBtn rendered`);
	return (
		<>
			<button onClick={increment}>+</button>
		</>
	);
};

export default React.memo(CountBtn);
