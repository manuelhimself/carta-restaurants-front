import React, { Component } from 'react';
import Translate from "./local/Translate";
import { Link } from "react-router-dom";

class Footer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <footer className="mt-5 pt-5 pb-5 footer ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-xs-12 portal-restaurants links text-center">
                            <h4><Translate string={'footer-portal-restaurants'}/></h4>
                            <ul className="m-0 p-0">
                                <li>- <a href="https://admin.restaurat.me/login.php"><Translate string={'inici-sesio'}/></a></li>
                                <li>- <a href="https://admin.restaurat.me/reserves.php"><Translate string={'footer-consulta-reserva'}/></a></li>
                                <li>- <a href="https://admin.restaurat.me/index.php"><Translate string={'footer-edita-perfil'}/></a></li>
                                <li>- <a href="https://admin.restaurat.me/editarCarta.php"><Translate string={'footer-edita-cartes'}/></a></li>
                            </ul>
                        </div>
                        <div className="col-lg-6 col-xs-12 portal-clients links text-center">
                            <h4 className="mt-lg-0 mt-sm-3"><Translate string={'footer-portal-clients'}/></h4>
                            <ul className="m-0 p-0">
                                <li>- <Link to="/"><Translate string={'inici-sesio'}/></Link></li>
                                <li>- <Link to="/"><Translate string={'footer-cerca-restaurants'}/></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col copyright">
                            <p className=""><small className="text-white-50">© 2021. Tots els drets reservats.</small></p>
                        </div>
                    </div>
                </div>
            </footer>

        )
    }
}

export default Footer;