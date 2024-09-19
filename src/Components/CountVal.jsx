import React, { memo } from "react";

const CountVal = ({ count }) => {
	console.log(`CountVal rendered`);
	return <>Count: {count}</>;
};

export default memo(CountVal);
