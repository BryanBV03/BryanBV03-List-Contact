import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light mb-3 px-3">
			<Link to="/" className="navbar-brand">
				<h4>Home</h4>
			</Link>
			<div className="collapse navbar-collapse justify-content-end">
				<ul className="navbar-nav">
					<li className="nav-item">
						<Link to="/contacts" className="nav-link">
							<button type="button" className="btn btn-outline-primary">
								Lista de contactos
							</button>
						</Link>
					</li>
					<li className="nav-item ms-3">
						<Link to="/add-contact" className="nav-link">
							<button className="btn btn-outline-success">
								Crear Nuevo Contacto
							</button>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};