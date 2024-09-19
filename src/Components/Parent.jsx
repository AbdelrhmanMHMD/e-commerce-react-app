import React from "react";
import Child from "./Child";
import UserProvider from "./UserProvider";

const Parent = () => {
	return (
		<>
			<UserProvider>
				<h1>Parent</h1>
				<Child />
			</UserProvider>
		</>
	);
};

export default Parent;
