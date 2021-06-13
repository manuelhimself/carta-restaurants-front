import React, { Component } from 'react';
import Translate from "./local/Translate";


class Sercador extends React.Component {

    nom = React.createRef();

    obtenirNom = (e) => {
        e.preventDefault();
        this.props.establiment(this.nom.current.value);
    }

    render(){
        return(
            <div className="form-group col-md-4" id="sercador">
            <label><Translate string={'input-restaurant'}/></label>
            <input type="text" className="form-control" ref={this.nom} onChange={this.obtenirNom} />
          </div>
        )
    }
}

export default Sercador;