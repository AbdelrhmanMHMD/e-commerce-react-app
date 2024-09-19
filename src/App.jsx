import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Menu from "./pages/Menu";
import ShoppingCart from "./pages/ShoppingCart";
import NotFoundPage from "./pages/NotFoundPage";
import Login from "./pages/Login";
import axios from "axios";
import Posts from "./pages/Posts";
import Admin from "./pages/Admin";
import ProductForm from "./pages/ProductForm";
import { ToastContainer, toast } from "react-toastify";
import Post from "./pages/Post";
class App extends Component {
	state = {
		products: [],
	};

	// best place to call backend is componentDidMount
	async componentDidMount() {
		// calling backend
		const { data } = await axios.get("http://localhost:8000/products");

		// setState
		this.setState({ products: data });
	}
	toggleToCart = async (product) => {
		//state
		let oldProducts = JSON.parse(JSON.stringify(this.state.products));
		// deep clone
		let products = [...this.state.products];
		let index = products.indexOf(product);
		//edit
		products[index].tocart = !products[index].tocart;
		//setState
		this.setState({ products });

		//backend
		try {
			await axios.put(
				`http://localhost:8000/products/${product.id}`,
				products[index]
			);
		} catch (err) {
			//Bug Here
			this.setState({ products: oldProducts });
			toast.error(`Sorry, Couldnot add to cart`);
		}
	};

	handleIncrement = async (product) => {
		//state
		let oldProducts = JSON.parse(JSON.stringify(this.state.products));
		// deep clone
		let products = [...this.state.products];
		let index = products.indexOf(product);
		//edit
		products[index].numInCart += 1;
		//setState
		this.setState({ products });

		//backend
		try {
			await axios.put(
				`http://localhost:8000/products/${product.id}`,
				products[index]
			);
		} catch (err) {
			//Bug Here
			toast.error(`Sorry, Couldnot perform this action`);
			this.setState({ products: oldProducts });
		}
	};

	handleReset = async () => {
		//state
		let oldProducts = [...this.state.products];
		// clone
		let products = [...this.state.products];
		//edit
		products = products.map((p) => {
			p.numInCart = 0;
			return p;
		});
		// setState
		this.setState({ products });

		//backend
		try {
			products.forEach(async (product) => {
				await axios.put(
					`http://localhost:8000/products/${product.id}`,
					product
				);
			});
		} catch (err) {
			alert("Error cant reset");
			this.setState({ products: oldProducts });
		}
	};

	handleDelete = async (product) => {
		// state
		let oldProducts = [...this.state.products];
		//clone
		let products = this.state.products;
		//edit
		products = products.filter((p) => p.id !== product.id);
		//setState
		this.setState({ products });

		//backend
		try {
			await axios.delete(`http://localhost:8000/products/${product.id}`);
		} catch (err) {
			toast.error(`Sorry, Can't Delete this product`);
			this.setState({ products: oldProducts });
		}
	};
	removeFromCart = async (product) => {
		// State - deep copy to preserve the original state
		let oldProducts = JSON.parse(JSON.stringify(this.state.products));

		// Clone products
		let products = [...this.state.products];
		let index = products.indexOf(product);

		// Edit
		products[index].tocart = false; // remove product from cart

		// SetState - optimistic update
		this.setState({ products });

		// Backend call
		try {
			await axios.put(
				`http://localhost:8000/products/${product.id}`, // correct product ID
				products[index]
			);
		} catch (err) {
			toast.error("Error, Couldn't remove product from cart");

			// Revert back to old state (product reappears in the cart)
			this.setState({ products: oldProducts });
		}
	};

	render() {
		return (
			<BrowserRouter>
				<ToastContainer />
				<NavBar
					productsNum={
						this.state.products.filter((p) => p.tocart).length
					}
				/>
				<Routes>
					<Route
						path="/menu?"
						element={
							<Menu
								products={this.state.products}
								onToggleToCart={this.toggleToCart}
							/>
						}
					/>
					<Route
						path="/shoppingcart"
						element={
							<ShoppingCart
								productsInCart={this.state.products.filter(
									(p) => p.tocart
								)}
								onIncrement={this.handleIncrement}
								onReset={this.handleReset}
								onDelete={this.removeFromCart}
							/>
						}
					/>
					<Route
						path="/admin"
						element={
							<Admin
								products={this.state.products}
								onDelete={this.handleDelete}
							/>
						}
					/>
					<Route path="/productform/:id" element={<ProductForm />} />
					<Route path="/posts" element={<Posts />} />
					<Route path="/post" element={<Post />} />
					<Route path="/login" element={<Login />}></Route>
					<Route path="*" element={<NotFoundPage />}></Route>
				</Routes>
			</BrowserRouter>
		);
	}
}

export default App;
