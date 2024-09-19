import React, { useReducer } from "react";
const initialVal = { count: 0 };
const reducer = (state, action) => {
	switch (action.type) {
		case "INCREMENT":
			return { count: state.count + 1 };
		case "DECREMENT":
			return { count: state.count - 1 };
		case "RESET":
			return initialVal;
		case "INCREASE_BY_VALUE":
			return { count: state.count + action.payload };
		default:
			return state;
	}
};
const Counter = () => {
	const [state, dispatch] = useReducer(reducer, initialVal);
	return (
		<>
			<h1>Counter: {state.count}</h1>
			<button
				onClick={() => dispatch({ type: "INCREMENT" })}
				className="btn btn-primary ms-1"
			>
				+
			</button>
			<button
				onClick={() => dispatch({ type: "DECREMENT" })}
				className="btn btn-primary ms-1"
			>
				-
			</button>
			<button
				onClick={() =>
					dispatch({ type: "INCREASE_BY_VALUE", payload: 3 })
				}
				className="btn btn-primary ms-1"
			>
				+3
			</button>
			<button
				onClick={() => dispatch({ type: "RESET" })}
				className="btn btn-primary ms-1"
			>
				reset
			</button>
		</>
	);
};

export default Counter;
