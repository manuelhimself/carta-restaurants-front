import React, { Component } from 'react';
import axios from 'axios';
import Translate from "../Components/local/Translate";
import { Link } from "react-router-dom";




class Registre extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            correu: '',
            nom: '',
            errorNom: '',
            llinatge: '',
            telefon: '',
            password: '',
            password2: '',
            error: '',

        }
    }


    registre() {
        if (this.state.password === this.state.password2) {
            const url = 'https://api.restaurat.me/controller/usuari/addUser.php';
            axios.get(url, { params: { correu: this.state.correu, password: this.state.password, nom: this.state.nom, llinatge: this.state.llinatge, telefon: this.state.telefon } })
                .then((response) => {
                    if (response.data === 'ERROR') {
                        { this.setState({ error: <Translate string={'no-registre'} />}) }
                    } else {
                        { this.setState({ error: '' }) }
                        this.resetForm();
                        window.location.href = '/';
                    }
                })
        } else {
            { this.setState({ error: <Translate string={'no-password'} /> }) }
        }

    }

    resetForm() {
        this.setState({ correu: '', password: '', nom: '', llinatge: '', telefon: '', error: '', password2: '' })
    }
    passwordChange(event) {
        this.setState({ password: event.target.value })

    }
    password2Change(event) {
        this.setState({ password2: event.target.value })
    }
    correuChange(event) {
        this.setState({ correu: event.target.value })
    }
    nomChange(event) {
        this.setState({ nom: event.target.value })
    }
    llinatgeChange(event) {
        this.setState({ llinatge: event.target.value })
    }
    telefonChange(event) {
        this.setState({ telefon: event.target.value })
    }


    render() {
        const ref = React.createRef();

        return (
            <div id="contenidorPrincipal">
                <div className="container" id="contenidorSecundari">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-sm-12 mt-2" id="contenidor">
                            <h2 className="mt-2"><Translate string={'registre'} /></h2>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label><Translate string={'contact-nom'} /></label>
                                        <input id="nom" className="form-control" name="nom" type="text" value={this.state.nom} onChange={this.nomChange.bind(this)} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label><Translate string={'llinatge'} /></label>
                                        <input id="email" className="form-control" name="llinatge" type="text" value={this.state.llinatge} onChange={this.llinatgeChange.bind(this)} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label><Translate string={'contact-email'} /></label>
                                        <input id="correu" className="form-control" name="correu" type="email" value={this.state.correu} onChange={this.correuChange.bind(this)} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label><Translate string={'telefon'} /></label>
                                        <input id="tlfn" className="form-control" name="telefon" value={this.state.telefon} onChange={this.telefonChange.bind(this)} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label><Translate string={'password'} /></label>
                                        <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.passwordChange.bind(this)} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label><Translate string={'repeat-password'} /></label>
                                        <input type="password" className="form-control" name="password2" value={this.state.password2} onChange={this.password2Change.bind(this)} />
                                    </div>
                                    <span id="m1" className="font-weight-bold ml-3">{this.state.error}</span>
                                    <div className="col-12 mb-3 mt-3" id="botons">
                                        <button className="btn" onClick={() => this.registre()}><Translate string={'registre'} /></button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Registre;