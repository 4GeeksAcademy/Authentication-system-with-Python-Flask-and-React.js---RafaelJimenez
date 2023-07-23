import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import "../../styles/newPackage.css"
import { Context } from "../store/appContext";
import swal from 'sweetalert';

export const Registro = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const [itemUser, setItemUser] = useState({
        email: "",
        password: ""
    });

    const ValidarCamposUser = () => {
        if (itemUser.email == "" || itemUser.email == null) return false;
        if (itemUser.password == "" || itemUser.password == null) return false;
        return true;
    };

    const InsertNewUser = async () => {
        console.log(itemUser);
        if (ValidarCamposUser()) {
            let user = {
                email: itemUser.email,
                password: itemUser.password,
                // "is_active" : true
            }
            let resp = await actions.newUser(user);
            if (resp) {
                //alert("Bienvenido ha ingresado con exito!");
                swal("Usuario registrado", "Se ha registrado con exito!", "success");
                navigate('/login');
            }
            else {
                swal("Error", "Intente de nuevo.", "error");
            }
        }
        else
            swal("Atención", "Uno de los campos está vacío o no cumple con las condiciones.", "warning");
        //alert("Uno de los campos está vacío o no cumple con las condiciones.");
    };

    return (
        <div className="cajaprincipal my-4 d-flex flex-column justify-content-center align-items-center">
            <div className="w-50">
                <h1 className="m-2 text-center">Registrate</h1>

                <div className="row m-2">
                    <div className="col-md-6 col-sm-6 col-xs-3 mb-2">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGrid" onChange={event => {
                                setItemUser({
                                    ...itemUser,
                                    email: event.target.value
                                });
                            }} />
                            <label for="floatingSelectGrid">Email</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-3 mb-2">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="floatingInputGrid" onChange={event => {
                                setItemUser({
                                    ...itemUser,
                                    password: event.target.value
                                });
                            }} />
                            <label for="floatingSelectGrid">Contraseña</label>
                        </div>
                    </div>

                </div>

                <div className="row d-flex justify-content-center  m-2">
                    <div className="d-flex justify-content-center col-md-6 col-sm-5 col-xs-3 px-0">
                        <button type="submit" onClick={() => InsertNewUser()} className="col-10 btn btn-travelink btn-outline-info rounded-pill">Aceptar</button>
                    </div>
                    <Link to="/login" className="d-flex justify-content-center col-md-6 col-sm-5 col-xs-3 px-0 d-flex">
                        <button type="button" className="col-10 btn btn-travelink btn-outline-info rounded-pill">Volver</button>
                    </Link>
                </div>

            </div>
        </div >
    )
}