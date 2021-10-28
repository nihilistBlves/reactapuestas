import React, { Component } from 'react'
import imagen from '../../assets/images/foto.jpg'

export default class HomeApuestas extends Component {
    render() {
        return (
            <div className="row m-3 justify-content-center">
                <div className="col-6">
                    <h1>Bienvenidos a las apuestas de la CHAMPIONS</h1>
                    <img src={imagen}/>
                </div>
            </div>
        )
    }
}
