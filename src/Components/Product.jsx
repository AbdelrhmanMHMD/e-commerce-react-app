import React from "react";

const Product = (props) => {
	return (
		<div className="row my-2">
			<div className="col-3">
				<span style={{ color: "green", fontWeight: "bold" }}>
					{props.p.name}
				</span>
			</div>
			<div className="col">
				<span className="badge text-bg-primary">
					{props.p.numInCart}
				</span>
				<button
					onClick={() => props.onIncrement(props.p)}
					className="btn btn-primary btn-sm ms-2"
				>
					+
				</button>
				<button
					onClick={() => props.onDelete(props.p)}
					className="btn btn-danger ms-2"
				>
					<i className="fa-solid fa-trash"></i>
				</button>
			</div>
		</div>
	);
};

export default Product;
