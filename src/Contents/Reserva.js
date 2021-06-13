import React, { Component } from 'react';
import { withRouter, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";

class Reserva extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dia: '',
            hora: '',
            comensals: '',
            observacions: '',
            nom: '',
            llinatge: '',
            telefon: '',
            correu: '',
            errorDia: 'Error dia',
            errorHora: 'Error hora',
            errorComensals: 'Error comensals',
            errorInsert: '',
            isLoaded: false,
            data: ''
        }

    };

    updateStateDia(e) {
        this.setState({ dia: e.target.value }, this.validacionsUpdate);
    }

    updateStateHora(e) {
        this.setState({ hora: e.target.value }, this.validacionsUpdate);
    }

    updateStateComensals(e) {
        this.setState({ comensals: e.target.value }, this.validacionsUpdate);
    }

    updateStateObservacions(e) {
        this.setState({ observacions: e.target.value });
    }

    validacioHora() {
        let i = this.props.match.params.id;
        const url = "https://api.restaurat.me/controller/reserves/validacioHora.php";
        axios.get(url, { params: { hora: this.state.hora, idEstabliment: i, dia: this.state.dia } })
            .then((response) => {
                if (response.data === "errorHora" || this.state.hora == '') {
                    { this.setState({ errorHora: "Error hora" }) }
                } else {
                    { this.setState({ errorHora: "" }) }
                }
            })
    }

    validacioComensals() {
        let i = this.props.match.params.id;
        const url = "https://api.restaurat.me/controller/reserves/validacioComensals.php";
        axios.get(url, { params: { data: this.state.dia, idEstabliment: i, comensals: this.state.comensals } })
            .then((response) => {
                if (response.data === "errorComensals" || this.state.comensals == '') {
                    { this.setState({ errorComensals: "Error comensals" }) }
                } else {
                    { this.setState({ errorComensals: "" }) }
                }
            })
    }

    validacioDia() {
        let i = this.props.match.params.id;
        const url = "https://api.restaurat.me/controller/reserves/validacioDia.php";
        axios.get(url, { params: { idEstabliment: i, dia: this.state.dia } })
            .then((response) => {
                if (response.data === "errorDia" || this.state.dia == '') {
                    { this.setState({ errorDia: "Error dia" }) }
                } else {
                    { this.setState({ errorDia: "" }) }
                }
            })
    }

    afegirReserva() {
        let i = this.props.match.params.id;
        let user = sessionStorage.getItem('idUsuari');
        const url = "https://api.restaurat.me/controller/reserves/afegirReserva.php";
        axios.get(url, {
            params: {
                idEstabliment: i, idUsuari: user , dia: this.state.dia, hora: this.state.hora,
                comensals: this.state.comensals, observacions: this.state.observacions
            }
        })
            .then((response) => {
                if (response.data == "error") {
                    { this.setState({ errorInsert: "No s'ha pogut realitzar la reserva" }) }
                } else {
                    { this.setState({ errorInsert: "insert realitzat" }) }
                }
            })
    }

    reservaValida() {
        if (this.state.errorComensals == '' && this.state.errorDia == '' && this.state.errorHora == '') {
            this.afegirReserva();
            { this.setState({ errorInsert: "" }) }
            alert('La reserva sa realitzar correctament')
            window.location.href='/'
        } else {
            { this.setState({ errorInsert: "No s'ha pogut realitzar la reserva" }) }
        }
    }

    validacionsUpdate() {
        this.validacioComensals();
        this.validacioDia();
        this.validacioHora();
    }

    validacio() {
        this.validacioComensals();
        this.validacioDia();
        this.validacioHora();
        this.reservaValida();
    }


    render() {
        return (
            <div id="contenidorPrincipal2">
                <div id="contenidorSecundari2" className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-sm-12" style={{ backgroundColor: "#84878a", color: "white" }}>
                            <h1 className="text-center mb-4">Reserva nom restaurant</h1>
                            <form className="mt-5">
                                <div className="form-row justify-content-center">
                                    <div className="form-group col-sm-3">
                                        <label htmlFor="dia">Dia:</label>
                                        <input type="date" className="form-control text-center" name="dia" value={this.state.dia} onChange={this.updateStateDia.bind(this)} />
                                        <span class="font-weight-bold ml-3">{this.state.errorDia}</span>
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label htmlFor="hora">Hora:</label>
                                        <input type="time" className="form-control text-center" name="hora" value={this.state.hora} onChange={this.updateStateHora.bind(this)} />
                                        <span class="font-weight-bold ml-3">{this.state.errorHora}</span>
                                    </div>
                                    <div className="form-group col-sm-3">
                                        <label htmlFor="comensals">Comensals:</label>
                                        <input type="number" className="form-control text-center" name="comensals" min="1" value={this.state.comensals} onChange={this.updateStateComensals.bind(this)} />
                                        <span class="font-weight-bold ml-3">{this.state.errorComensals}</span>
                                    </div>
                                </div>
                                <div className="form-row justify-content-center">
                                    <div className="form-group col-md-9">
                                        <label htmlFor="observacions">Observacions:</label>
                                        <input type="textarea" className="form-control" name="observacions" onChange={this.updateStateObservacions.bind(this)} />
                                    </div>
                                </div>
                                <div className="form-row justify-content-center">
                                    <div className="form-group col-md-9">
                                        <span class="font-weight-bold ml-3">{this.state.errorInsert}</span>
                                        <button type="button" className="btn float-right" onClick={() => { this.validacio() }}>Enviar</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
export default withRouter(Reserva);