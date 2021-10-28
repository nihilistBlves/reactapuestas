import React, { Component } from 'react'
import { Redirect } from 'react-router';
import Global from '../../Global'
import axios from 'axios';

export default class EditarApuesta extends Component {
    
    state = {
        apuesta: {},
        carga: false,
        status: false
    }

    cajaUsuario = React.createRef();
    cajaResultado = React.createRef();
    cajaFecha = React.createRef();

    editarApuesta = (e) => {
        e.preventDefault();
        var request = "/api/apuestas";
        var url = Global.url + request;
        var apuesta = {
            idApuesta: this.props.idApuesta,
            usuario: this.cajaUsuario.current.value,
            resultado: this.cajaResultado.current.value,
            fecha: this.cajaFecha.current.value
        }
        axios.put(url, apuesta).then(response => {
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
            return (<Redirect to="/apuestas"/>);
        }
        return (
            <div className="row m-3 justify-content-center">
                <div className="col-3 text-center">
                    <h1>Editar apuesta</h1>
                    {this.state.carga ?
                        <form onSubmit={this.editarApuesta}>
                            <div class="mb-3">
                                <label for="usuario" class="form-label">Usuario</label>
                                <input type="text" required class="form-control text-center" id="usuario" defaultValue={this.state.apuesta.usuario} placeholder="Introduzca un nombre de usuario" ref={this.cajaUsuario}/>
                            </div>
                            <div class="mb-3">
                                <label for="resultado" class="form-label">Resultado</label>
                                <input type="text" required class="form-control text-center" id="resultado" defaultValue={this.state.apuesta.resultado} placeholder="Resultado en formato (Goles local-Goles visitante)" ref={this.cajaResultado}/>
                            </div>
                            <div class="mb-3 form-check">
                                <label for="fecha" class="form-label">Fecha</label>
                                <input type="text" required class="form-control text-center" id="fecha" defaultValue={this.state.apuesta.fecha} placeholder="Fecha en formato (d/m/a)" ref={this.cajaFecha}/>
                            </div>
                            <button class="btn btn-success">Editar apuesta</button>
                        </form> :
                        <h2>Cargando datos...</h2>
                    }
                </div>
            </div>
        )
    }
}
