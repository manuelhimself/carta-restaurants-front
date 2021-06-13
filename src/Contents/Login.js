import React, { Component } from 'react';
import axios from 'axios';
import Translate from "../Components/local/Translate";
import { Link } from "react-router-dom";




class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: ''
        }
    }


    iniciSessio() {
        const url = 'https://api.restaurat.me/controller/usuari/autentificacio.php';
        axios.get(url, { params: { email: this.state.email, password: this.state.password } })
            .then((response) => {
                if (response.data === 'ERROR') {
                    { this.setState({ error: 'Correu o clau no valids' }) }
                } else {
                    let idUsuari = response.data;
                    sessionStorage.setItem('idUsuari', idUsuari);
                    this.resetForm();
                    window.location.href = '/';
                }
            })
    }


    resetForm() {
        this.setState({ email: '', password: '',error:'' })
    }
    passwordChange(event) {
        this.setState({ password: event.target.value })

    }
    emailChange(event) {
        this.setState({ email: event.target.value })
    }


    render() {
        const ref = React.createRef();

        return (
            <div id="contenidorPrincipal">
                <div className="container" id="contenidorSecundari">
                    <div className="row justify-content-center">
                        <div className="col-md-4 col-sm-12" id="contenidor">
                            <div className="form-group col-12 mt-3">
                                <label><Translate string={'contact-email'} /></label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" value={this.state.email} onChange={this.emailChange.bind(this)} />
                            </div>
                            <div className="form-group col-12 mb-0">
                                <label><Translate string={'password'} /></label>
                                <input type="password" className="form-control" id="password" name="password" value={this.state.password} onChange={this.passwordChange.bind(this)} />
                            </div>
                            <span id="m1" className="font-weight-bold ml-3">{this.state.error}</span>
                            <div className="col-12 mb-3 mt-3 text-right">
                                <button id='inici' className="btn" onClick={() => this.iniciSessio()}><Translate string={'inici-sesio'} /></button>
                                <Link to="/Registre"><button id='inici' className="btn"><Translate string={'registre'} /></button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;