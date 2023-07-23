import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const navigate = useNavigate();

	const LogOut = () => {
		actions.logOut();
		navigate("/");
	}

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to={actions.gotopage("/demo")} className="me-3">
						<button className="btn btn-secondary">Check the Context in action</button>
					</Link>
					{
						!store.token ?
							<Link to="/login">
								<button className="btn btn-primary ">Iniciar Sesión</button>
							</Link>
							:
							<button onClick={() => LogOut()} className="btn btn-outline-danger m-0">Cerrar Sesión</button>
					}
				</div>
			</div>
		</nav>
	);
};
