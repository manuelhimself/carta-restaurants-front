import React, { Component } from 'react';
import icon from '../img/icone.png';
import Idioma from "./Idioma";
import Translate from "./local/Translate";
import Contact from "./Contact"
import { Link } from "react-router-dom";



class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuari: sessionStorage.getItem('idUsuari')
        }
    }

tancaSessio(){
    sessionStorage.clear();
    window.location.href='/';
}
    render() {

        if (this.state.usuari === null) {
            return (
                <nav className="navbar navbar-expand-lg navbar-light sticky-top">
                    <Link className="navbar-brand" to="/" >
                        <img id="logo" src={icon} alt="Logo"></img>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ml-2" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link"><Translate string={'navbar-inici'} /></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Contact" className="nav-link"><Translate string={'contact'} /></Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <Translate string={'selec-idoma'} />
                                </a>
                                <Idioma changeLanguage={this.props.changeLanguage} />
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <Link to="/Login" className="btn my-2 my-sm-0 realBtn" > <Translate string={'inici-sesio'} /></Link>
                        </form>
                    </div>
                </nav >
            )
        } else {
            return (
                <nav className="navbar navbar-expand-lg navbar-light sticky-top">
                    <Link className="navbar-brand" to="/" >
                        <img id="logo" src={icon} alt="Logo"></img>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link"><Translate string={'navbar-inici'} /></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Contact" className="nav-link"><Translate string={'contact'} /></Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <Translate string={'selec-idoma'} />
                                </a>
                                <Idioma changeLanguage={this.props.changeLanguage} />
                            </li>
                        </ul>
                        <Link to="/" className="nav-link">
                        <form className="form-inline my-2 my-lg-0">
                        <button class="btn my-2 my-sm-0 realBtn" onClick={()=>this.tancaSessio()}><Translate string={'tanca-sesio'} /></button>
                        </form>
                        </Link>
                    </div>
                </nav >
            )
        }

    }

}

export default Navbar;