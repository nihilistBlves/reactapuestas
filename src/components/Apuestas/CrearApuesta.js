import axios from 'axios';
import React, { Component } from 'react'
import { Redirect } from 'react-router';
import Global from '../../Global';

export default class CrearApuesta extends Component {

    state = {
        status: false
    }

    cajaUsuario = React.createRef();
    cajaResultado = React.createRef();
    cajaFecha = React.createRef();

    crearApuesta = (e) => {
        e.preventDefault();
        var request = "/api/apuestas";
        var url = Global.url + request;
        var apuesta = {
            idApuesta: 0,
            usuario: this.cajaUsuario.current.value,
            resultado: this.cajaResultado.current.value,
            fecha: this.cajaFecha.current.value
        }
        axios.post(url, apuesta).then(response => {
            this.setState({
                status: true
            });
        });
    }

    render() {
        if (this.state.status) {
            return(<Redirect to="/apuestas"/>);
        }
        return (
            <div className="row m-3 justify-content-center">
                <div className="col-3 text-center">
                    <h1>Crear nueva apuesta</h1>
                    <form onSubmit={this.crearApuesta}>
                        <div class="mb-3">
                            <label for="usuario" class="form-label">Usuario</label>
                            <input type="text" required class="form-control text-center" id="usuario" placeholder="Introduzca un nombre de usuario" ref={this.cajaUsuario}/>
                        </div>
                        <div class="mb-3">
                            <label for="resultado" class="form-label">Resultado</label>
                            <input type="text" required class="form-control text-center" id="resultado" placeholder="Resultado en formato (Goles local-Goles visitante)" ref={this.cajaResultado}/>
                        </div>
                        <div class="mb-3 form-check">
                            <label for="fecha" class="form-label">Fecha</label>
                            <input type="text" required class="form-control text-center" id="fecha" placeholder="Fecha en formato (d/m/a)" ref={this.cajaFecha}/>
                        </div>
                        <button class="btn btn-success">Crear apuesta</button>
                    </form>
                </div>
            </div>
        )
    }
}
