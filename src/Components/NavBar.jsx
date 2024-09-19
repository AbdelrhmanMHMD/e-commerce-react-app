import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
	return (
		<nav
			className="navbar navbar-expand-lg bg-body-tertiary"
			data-bs-theme="dark"
		>
			<div className="container-fluid">
				<NavLink className="navbar-brand" to="/">
					Navbar
				</NavLink>

				<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					<li className="nav-item">
						<NavLink className="nav-link" to="/">
							Menu
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to="/shoppingcart">
							Shopping cart
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to="/posts">
							Posts
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to="/admin">
							Admin
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to="/login">
							Login
						</NavLink>
					</li>
				</ul>
				<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
					<li className="nav-item">
						<NavLink
							className="nav-link badge text-bg-primary"
							to="/shoppingcart"
						>
							<i className="fa-solid fa-cart-shopping fs-6"></i>
							<span className="badge text-bg-primary fs-6">
								{props.productsNum}
							</span>
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
