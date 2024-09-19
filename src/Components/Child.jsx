import React, { useContext } from "react";
import { UserContext } from "./UserProvider";

const Child = () => {
	const name = useContext(UserContext);
	return (
		<>
			<h1>Child</h1>
			<p>My name is {name}</p>
		</>
	);
};

export default Child;
