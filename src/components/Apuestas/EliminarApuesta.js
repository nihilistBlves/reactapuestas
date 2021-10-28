import axios from 'axios';
import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom';
import Global from '../../Global';

export default class EliminarApuesta extends Component {

    state = {
        apuesta: {},
        carga: false,
        status: false
    }

    eliminarApuesta = () => {
        var request = "/api/apuestas/" + this.state.apuesta.idApuesta;
        var url = Global.url + request;
        axios.delete(url).then(response => {
            this.setState({
                status: true
            });
        });
    }

    cargarApuesta = () => {
        var request = "/api/apuestas/" + this.props.idApuesta;
        var url = Global.url + request;
        axios.get(url).then(response => {
            this.setState({
                apuesta: response.data,
                carga: true
            });
        });
    }

    componentDidMount = () =>{
        this.cargarApuesta();
    }

    render() {
        if (this.state.status) {
            return(<Redirect to="/apuestas"/>);
        }
        return (
            <div className="row m-3 justify-content-center">
                <div className="col-6 text-center">
                    <h1>Eliminar apuesta</h1>
                    {this.state.carga ? 
                        <div>
                            <h2 style={{color:"darkred"}}>¿Está seguro de querer eliminar la siguiente apuesta?</h2>
                            <table className="table table-striped text-center">
                                <thead>
                                    <tr>
                                        <th>USUARIO</th>
                                        <th>RESULTADO</th>
                                        <th>FECHA</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{this.state.apuesta.usuario}</td>
                                        <td>{this.state.apuesta.resultado}</td>
                                        <td>{this.state.apuesta.fecha}</td>
                                        </tr>
                                </tbody>
                            </table>
                            <button onClick={() => {this.eliminarApuesta()}} className="btn btn-danger m3">Eliminar apuesta</button>
                            <NavLink to="/apuestas" className="btn btn-secondary m-3">Volver</NavLink>
                        </div> :
                        <h2>Cargando datos...</h2>
                    }
                </div>
            </div>
        )
    }
}
