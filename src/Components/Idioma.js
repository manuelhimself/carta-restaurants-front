import React, { Component } from 'react'
import Translate from "./local/Translate";
class Idioma extends Component {

    render() {
        const { changeLanguage } = this.props;
        return (

            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <button id="ca" className="dropdown-item" onClick={changeLanguage}><Translate string={'catala'} /></button>
                <button id="es" className="dropdown-item" onClick={changeLanguage}><Translate string={'castella'} /></button>
                <button id="en" className="dropdown-item" onClick={changeLanguage}><Translate string={'ingles'} /></button>
            </div>
        )
    }
}

export default Idioma;