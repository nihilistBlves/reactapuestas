import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'
import { NavLink } from 'react-router-dom'

export default class VerEquipo extends Component {

    state = {
        equipo: {},
        status: false
    }

    cargarEquipo = () => {
        var request = "/api/Equipos/" + this.props.idEquipo;
        var url = Global.url + request;
        axios.get(url).then(response => {
            this.setState({
                equipo: response.data,
                status: true
            });
        });
    }

    componentDidMount = () => {
        this.cargarEquipo();
    }

    componentDidUpdate = (oldProps) => {
        if (this.props.idEquipo != oldProps.idEquipo) {
            this.cargarEquipo();
        }
    }


    render() {
        return (
            <div className="row m-3 justify-content-center">
                <div className="col-6 text-center">
                    <h1 className="mb-3">Equipo</h1>
                    {this.state.status ? 
                        <div class="card text-center">
                            <div class="card-header">{this.state.equipo.nombre}</div>
                            <img src={this.state.equipo.imagen} style={{height:"250px",width:"200px"}} class="card-img-top mx-auto" />
                            <div class="card-body">
                                <h5 class="card-text">{"Champions: " + this.state.equipo.champions}</h5>
                                <a href={this.state.equipo.paginaWeb}>Página web</a>
                                <p class="card-text">{this.state.equipo.descripcion}</p>
                                <NavLink to={"/equipos/"+this.state.equipo.idEquipo+"/jugadores"} class="btn btn-success">Ver jugadores</NavLink>
                            </div>
                        </div> :
                        <h1>Cargando datos del equipo...</h1>    
                    }
                </div>
            </div>
        )
    }
}
