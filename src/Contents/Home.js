import React, { Component } from 'react';
import SelectPoblacio from '../Components/SelectEspecialitats';
import SelectEspecialitats from "../Components/SelectPoblacio";
import Cards from "../Components/Cards"
import Sercador from "../Components/Sercador"
import Map from "../Components/Map";
import axios from "axios";
import Translate from "../Components/local/Translate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEraser } from '@fortawesome/free-solid-svg-icons';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      poblacio: '',
      especialitat: '',
      establiment: '',
      filtre: [],
      id: ''
    }

  }
  componentDidMount() {

    const url2 = 'https://api.restaurat.me/controller/establiment/filtre.php';
    axios.post(url2).then(response => response.data)
      .then((data) => {
        this.setState({ filtre: data })
      })
  }
  consultaApi = () => {

    const url = `https://api.restaurat.me/controller/establiment/filtre.php?nom=${this.state.establiment}&poblacio=${this.state.poblacio}&categoria=${this.state.especialitat}`;

    fetch(url)
      .then(resposta => resposta.json())
      .then(resultat => this.setState({ filtre: resultat }))
  }

  resetFiltre() {
    const url2 = 'https://api.restaurat.me/controller/establiment/filtre.php';
    axios.post(url2).then(response => response.data)
      .then((data) => {
        this.setState({ filtre: data })
      })
  }
  establiment = (establiment) => {
    this.setState({
      establiment
    }, () => {
      this.consultaApi();
    })
  }

  poblacio = (poblacio) => {

    this.setState({
      poblacio
    }, () => {
      this.consultaApi();
    })

  }

  especialitat = (especialitat) => {
    this.setState({
      especialitat
    }, () => {
      this.consultaApi();
    })
  }

  render() {

    return (
      <div className="app conteiner ">
        <Map filtre={this.state.filtre} />
        <div className="container">
          <form className="from-inline">
            <div className="row ">
              <Sercador establiment={this.establiment} />
              <SelectPoblacio especialitat={this.especialitat} idioma={this.props.idioma} />
              <SelectEspecialitats poblacio={this.poblacio} />
              <div class="col-md-1 col-sm-12 my-auto">
                <button className="btn form-group float-right mt-3" id="boto-borrar" onClick={this.resetFiltre}> <FontAwesomeIcon icon={faEraser} /></button>
              </div>
            </div>
          </form>
        </div>
        <Cards filtre={this.state.filtre} />
      </div>


    );
  }

}
export default Home;