import axios from 'axios';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Global from '../../Global';

export default class VerApuestas extends Component {

    state = {
        apuestas: [],
        status: false
    }

    cargarApuestas = () => {
        var request = "/api/apuestas";
        var url = Global.url + request;
        axios.get(url).then(response => {
            this.setState({
                apuestas: response.data,
                status: true
            });
        });
    }

    componentDidMount = () => {
        this.cargarApuestas();
    }

    render() {
        return (
            <div className="row m-3 justify-content-center">
                <div className="col-6 text-center">
                    {this.state.status ? 
                        <div className="row justify-content-center">
                            <div className="col-3">
                                <h1>Apuestas</h1>
                            </div>
                            <div className="col-3 mt-2">
                                <NavLink to="/apuestas/crear" className="btn btn-primary">Crear apuesta</NavLink>
                            </div>
                            <hr/>
                            <h3>Equipo Local: Real Madrid - Equipo Visitante: Atletico de Madrid</h3>
                            <table className="table table-striped text-center">
                                <thead>
                                    <tr>
                                        <th>USUARIO</th>
                                        <th>RESULTADO</th>
                                        <th>FECHA</th>
                                        <th>ACCION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.apuestas.map((apuesta, index) => {
                                        return(
                                            <tr>
                                                <td>{apuesta.usuario}</td>
                                                <td>{apuesta.resultado}</td>
                                                <td>{apuesta.fecha}</td>
                                                <td><NavLink to={"/apuestas/"+apuesta.idApuesta+"/editar"} className="btn btn-success m-1">Editar</NavLink><NavLink to={"/apuestas/"+apuesta.idApuesta+"/eliminar"} className="btn btn-danger m-1">Eliminar</NavLink></td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div> :
                        <h1>Cargando apuestas...</h1>
                    }
                </div>
            </div>
        )
    }
}
