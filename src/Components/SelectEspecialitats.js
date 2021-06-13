import React, { Component } from 'react';
import axios from 'axios';
import Translate from "./local/Translate";
import Idioma from './Idioma';


class SelectEspecialitats extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        especialitat: [],
        
    }
    componentDidMount() {
        axios.post(`https://api.restaurat.me/controller/categoria/categoriaIdioma.php?idioma=${this.props.idioma}`)
            .then(res => {
                const especialitat = res.data;
                this.setState({ especialitat });
            })
            
    }

    componentDidUpdate(prevProps){
        if(prevProps.idioma !== this.props.idioma){
            axios.post(`https://api.restaurat.me/controller/categoria/categoriaIdioma.php?idioma=${this.props.idioma}`)
            .then(res => {
                const especialitat = res.data;
                this.setState({ especialitat });
            })
           
        }
    }
    
    e = React.createRef();

    obteniEspecialitat = (e) =>{
        e.preventDefault();
    
        this.props.especialitat(this.e.current.value);
      }

    render() {
        return (
            <div className="form-group col-md-4" id="especialitats">
                <label ><Translate string={'select-especialitat'}/></label>
                <select  className="form-control" name="especialitats" ref={this.e} onChange={this.obteniEspecialitat}>
                    <option value= "0"></option>
                    {this.state.especialitat.map(especialitat =>
                        <option key={especialitat.id} value={especialitat.id}>{especialitat.nom}</option>
                    )}
                </select>
            </div>

        );
    }
}

export default SelectEspecialitats; 