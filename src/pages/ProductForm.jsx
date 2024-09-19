import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ProductForm = () => {
	const [state, setState] = React.useState({});
	const navigate = useNavigate();
	const { id } = useParams();

	React.useEffect(() => {
		const updateFunc = async () => {
			const { data } = await axios.get(
				`http://localhost:8000/products/${id}`
			);
			//clone
			let newState = { ...state };
			//edit
			newState["name"] = data.name;
			newState["price"] = data.price;
			//setState
			setState(newState);
		};
		if (id !== "new") {
			updateFunc();
		}
	}, []);
	

	const handleSubmit = async (e) => {
		e.preventDefault();

		//Add
		if (id === "new") {
			const obj = { ...state, tocart: false, numInCart: 0 };
			await axios.post("http://localhost:8000/products", obj);
		} else {
			//Edit
			const obj = { ...state, tocart: false, numInCart: 0};
			await axios.put(`http://localhost:8000/products/${id}`, obj);
		}
		navigate("/menu");
	};

	const handleChange = (e) => {
		// clone
		let newState = { ...state };
		// edit
		newState[e.currentTarget.name] = e.currentTarget.value;
		// setState
		setState(newState);
	};
	return (
		<>
			<div className="container">
				<h1>{id === 'new' ? 'Add Product' : 'Edit Product'}</h1>
				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						<label htmlFor="name" className="form-label">
							Product name
						</label>
						<input
							value={state.name ?? ""}
							onChange={handleChange}
							name="name"
							type="text"
							className="form-control"
							id="name"
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="price" className="form-label">
							Price
						</label>
						<input
							value={state.price ?? ""}
							onChange={handleChange}
							name="price"
							type="text"
							className="form-control"
							id="price"
						/>
					</div>
					<button type="submit" className="btn btn-primary">
					{id === 'new' ? 'Add Product' : 'Edit Product'}
					</button>
				</form>
			</div>
		</>
	);
};

export default ProductForm;
