import axios from 'axios';
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Global from '../../Global';

export default class VerJugadoresEquipo extends Component {

    state = {
        jugadores: [],
        status: false
    }

    cargarJugadores = () => {
        var request = "/api/Jugadores/JugadoresEquipo/" + this.props.idEquipo;
        var url = Global.url + request;
        axios.get(url).then(response => {
            this.setState({
                jugadores: response.data,
                status: true
            });
        });
    }

    componentDidMount = () => {
        this.cargarJugadores();
    }

    render() {
        return (
            <div className="row m-3 justify-content-center">
                    {this.state.status ? 
                        <div className="col-6">
                            <h1>Plantilla</h1>
                            <table className="table table-striped text-center">
                                <thead>
                                    <tr>
                                        <th>NOMBRE</th>
                                        <th>IMAGEN</th>
                                        <th>DETALLES</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.jugadores.map((jugador, index) => {
                                        return(<tr key={index}>
                                            <td>{jugador.nombre}</td>
                                            <td><img src={jugador.imagen} height="100px"/></td>
                                            <td><NavLink to={"/equipos/"+this.props.idEquipo+"/jugadores/"+jugador.idJugador} className="btn btn-primary">Ver detalles</NavLink></td>
                                        </tr>);
                                    })}
                                </tbody>
                            </table> 
                        </div> : 
                        <div className="col-6">
                            <h1>Cargando jugadores...</h1>
                        </div>
                    }
            </div>
        )
    }
}
