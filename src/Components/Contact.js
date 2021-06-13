import React, { Component } from 'react';
import axios from 'axios';
import Translate from "./local/Translate"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Pdf from "react-to-pdf";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''

        }
    }

    email() {
        const url = 'https://api.restaurat.me/controller/email/mail.php';
        axios.get(url, { params: { email: this.state.email, name: this.state.name, message: this.state.message } })

    }


    resetForm() {
        this.setState({ name: '', email: '', message: '' })
    }
    nameChange(event) {
        this.setState({ name: event.target.value })
    }

    emailChange(event) {
        this.setState({ email: event.target.value })
    }

    messageChange(event) {
        this.setState({ message: event.target.value })
    }



    render() {
        const ref = React.createRef();

        return (
            <div id="contenidorPrincipal">
                <div className="container" id="contenidorSecundari">
                    <div className="container">
                        <div className="row justify-content-center" >
                            <div className="col-md-6 col-sm-12" id="contact" >
                                <div className="col-12 mt-2">
                                    <h3><Translate string={'contact'} /></h3>
                                </div>
                                <label htmlFor="name"> <FontAwesomeIcon icon={faUser} /> <Translate string={'contact-nom'} /></label>
                                <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.nameChange.bind(this)} />
                                <div className="form-group" >
                                    <label htmlFor="exampleInputEmail1"><FontAwesomeIcon icon={faEnvelope} /> <Translate string={'contact-email'} /></label>
                                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.emailChange.bind(this)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message"> <FontAwesomeIcon icon={faPaperPlane} /> <Translate string={'contact-missatge'} /></label>
                                    <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.messageChange.bind(this)} />
                                </div>
                                <div className="col-12 mb-3 mt-3 botons text-right">
                                    <Pdf targetRef={ref} filename="contacte.pdf" >
                                        {({ toPdf }) => <button className="btn" onClick={toPdf}><Translate string={'pdf'} /></button>}
                                    </Pdf>
                                    <button type="submit" className="btn" onClick={() => this.email()}><Translate string={'contact-envia'} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Contact;