import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import Translate from "./local/Translate";
import { Link } from "react-router-dom";

class Cards extends React.Component {

    render() {
        if (this.props.filtre.length === 0) {
            return (
                <div className="container" id="filtre">
                    <div className="row">
                        <div className="col-12">
                            <h6><Translate string={'card-no-resultat'} /></h6>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="container" id="contenidorCards">
                    <div className="row filaCards">
                        {this.props.filtre.map((establiment) => (
                            <div className="col-md-4">

                                <div className="card rounded border-0 h-100">
                                    <img className="card-img-top" src={`https://admin.restaurat.me/images/establiment/${establiment.id}-1.jpg`} style={{ height: 250 }} onError={(e) => {
                                        e.target.onerror = null
                                        e.target.src = 'https://admin.restaurat.me/images/establiment/default.jpg'
                                    }}></img>
                                    <div className="card-body p-4" >
                                        <h5 className="card-title">
                                            {establiment.nom}</h5>
                                        <p className="card-title">
                                            <FontAwesomeIcon icon={faPhoneAlt} />  {establiment.telefon}
                                        </p>
                                        <p className="card-title">
                                            <FontAwesomeIcon icon={faEnvelope} />  {establiment.correu_electronic}
                                        </p>
                                        <p className="card-title">
                                            <FontAwesomeIcon icon={faMapMarker} />  {establiment.p}
                                        </p>
                                    </div>
                                    <Link to={"/Restaurant/" + establiment.id} className="text-decoration-none stretched-link"  >
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            );
        }
    }


}

export default Cards