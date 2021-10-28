import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'
import { NavLink } from 'react-router-dom'

export default class VerJugador extends Component {

    state = {
        jugador: {},
        status: false
    }

    cargarJugador = () => {
        var request = "/api/Jugadores/" + this.props.idJugador;
        var url = Global.url + request;
        axios.get(url).then(response => {
            this.setState({
                jugador: response.data,
                status: true
            }); 
        });
    }

    componentDidMount = () => {
        this.cargarJugador();
    }

    render() {
        return (
            <div className="row m-3 justify-content-center">
                <div className="col-6 text-center">
                    <h1 className="mb-3">Jugador</h1>
                    {this.state.status ? 
                        <div className="card text-center">
                            <div className="card-header">{this.state.jugador.nombre}</div>
                            <img src={this.state.jugador.imagen} style={{height:"250px",width:"200px"}} className="card-img-top mx-auto" />
                            <div className="card-body">
                                <h5 className="card-text">{"Posición: " + this.state.jugador.posicion}</h5>
                                <h6 className="card-text">{"Fecha de nacimiento: " + this.state.jugador.fechaNacimiento}</h6>
                                <h6 className="card-text">{"País: " + this.state.jugador.pais}</h6>
                                <NavLink to={"/equipos/"+this.props.idEquipo+"/jugadores"} className="btn btn-success">Ver jugadores</NavLink>
                            </div>
                        </div> :
                        <h1>Cargando datos del jugador...</h1>    
                    }
                </div>
            </div>
        )
    }
}
