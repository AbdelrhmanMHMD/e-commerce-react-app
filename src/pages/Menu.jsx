import React from "react";

const Menu = (props) => {
	return (
		<React.Fragment>
			<div className="container">
				<h1>Menu</h1>
				<table className="table container">
					<thead>
						<tr>
							<th scope="col">Name</th>
							<th scope="col">Price</th>
							<th scope="col"></th>
						</tr>
					</thead>
					<tbody>
						{props.products.map((product) => (
							<tr key={product.id}>
								<td>{product.name}</td>
								<td>{product.price}</td>
								<td>
									<button
										onClick={() =>
											props.onToggleToCart(product)
										}
										className="btn btn-sm"
									>
										<i
											className={
												product.tocart
													? "fa-solid fa-cart-shopping"
													: "fa-solid fa-cart-shopping opacity-25"
											}
										></i>
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</React.Fragment>
	);
};

export default Menu;
