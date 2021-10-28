import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomeApuestas from './Apuestas/HomeApuestas'
import MenuApuestas from './Apuestas/MenuApuestas'
import VerEquipo from './Apuestas/VerEquipo'
import VerJugadoresEquipo from './Apuestas/VerJugadoresEquipo'
import VerJugador from './Apuestas/VerJugador'
import VerApuestas from './Apuestas/VerApuestas'
import CrearApuesta from './Apuestas/CrearApuesta'
import EditarApuesta from './Apuestas/EditarApuesta'
import EliminarApuesta from './Apuestas/EliminarApuesta'


export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <MenuApuestas />
                <Switch>
                    <Route exact path="/" component={HomeApuestas}/>
                    <Route exact path="/equipos/:idEquipo" render={props => {
                        var id = props.match.params.idEquipo;
                        return (<VerEquipo idEquipo={id}/>)
                    }}/>
                    <Route exact path="/equipos/:idEquipo/jugadores" render={props => {
                        var id = props.match.params.idEquipo;
                        return (<VerJugadoresEquipo idEquipo={id}/>)
                    }}/>
                    <Route exact path="/equipos/:idEquipo/jugadores/:idJugador" render={props => {
                        var idEquipo = props.match.params.idEquipo;
                        var idJugador = props.match.params.idJugador;
                        return (<VerJugador idEquipo={idEquipo} idJugador={idJugador}/>)
                    }}/>
                    <Route exact path="/apuestas" component={VerApuestas}/>
                    <Route exact path="/apuestas/crear" component={CrearApuesta}/>
                    <Route exact path="/apuestas/:idApuesta/editar" render={props => {
                        var idApuesta = props.match.params.idApuesta;
                        return (<EditarApuesta idApuesta={idApuesta}/>)
                    }}/>
                    <Route exact path="/apuestas/:idApuesta/eliminar" render={props => {
                        var idApuesta = props.match.params.idApuesta;
                        return (<EliminarApuesta idApuesta={idApuesta}/>)
                    }}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
