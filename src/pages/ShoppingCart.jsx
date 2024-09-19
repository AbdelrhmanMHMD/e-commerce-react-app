import React from "react";
import Product from "./../Components/Product";


const ShoppingCart = (props) => {
	return (
		<div className="container">
			<h1>Shopping Cart</h1>
			<button onClick={props.onReset} className="btn btn-secondary">
				Reset
			</button>
			{props.productsInCart.map((p) => (
				<Product
					p={p}
					onIncrement={props.onIncrement}
					onDelete={props.onDelete}
					key={p.id}
				/>
			))}
		</div>
	);
};

export default ShoppingCart;
