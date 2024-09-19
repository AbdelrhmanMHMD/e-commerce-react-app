import React, { useCallback, useMemo } from "react";
import CountBtn from "./CountBtn";
import CountVal from "./CountVal";

const Counters = () => {
	const [count1, setCount1] = React.useState(0);
	const [count2, setCount2] = React.useState(0);

	const isEven = useMemo(() => {
		let i = 0;
		while (i < 2000000000) i++;
		return count1 % 2 === 0;
	}, [count1]);

	const handleIncrement1 = useCallback(() => {
		setCount1(count1 + 1);
	}, [count1]);
	const handleIncrement2 = useCallback(() => {
		setCount2(count2 + 1);
	}, [count2]);

	console.log(`Parent Rendered`);
	return (
		<>
			<h1>Counters</h1>
			<h2>{isEven ? "Even" : "Odd"}</h2>
			<div>
				<CountVal count={count1} />
				<CountBtn increment={handleIncrement1} />
			</div>
			<div>
				<CountVal count={count2} />
				<CountBtn increment={handleIncrement2} />
			</div>
		</>
	);
};

export default Counters;
