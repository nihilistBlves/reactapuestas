import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/champions.png'

export default class MenuApuestas extends Component {
    render() {
        return (
            <div className="row">
                <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"lightseagreen"}}>
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/"><img src={logo} style={{height:"50px"}}/>Champions</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/apuestas">Apuestas</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Equipos
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><NavLink className="dropdown-item" to="/equipos/3">Real Madrid</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="/equipos/4">Atlético de Madrid</NavLink></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
