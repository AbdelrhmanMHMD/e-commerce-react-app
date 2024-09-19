import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Admin extends Component {
	render() {
		return (
			<>
				<div className="container">
					<h1>Admin</h1>
					<Link
						className="btn btn-primary btn-sm"
						to="/productform/new"
					>
						Add
					</Link>
					<table className="table">
						<thead>
							<tr>
								<th scope="col">Name</th>
								<th scope="col">Price</th>
								<th scope="col"></th>
								<th scope="col"></th>
							</tr>
						</thead>
						<tbody>
							{this.props.products.map((p) => (
								<tr key={p.id}>
									<td>{p.name}</td>
									<td>{p.price}</td>
									<td>
										<Link
											to={`/productform/${p.id}`}
											style={{ cursor: "pointer" }}
											className="fa-solid fa-pen-to-square"
										></Link>
									</td>
									<td>
										<Link
											onClick={() =>
												this.props.onDelete(p)
											}
											style={{ cursor: "pointer" }}
											className="fa-solid fa-trash"
										></Link>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</>
		);
	}
}

export default Admin;
