import React, { Component } from 'react';
import { BrowserRouter as Router, Route , useParams} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./Contents/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import { LocaleContext } from "./LocaleContext";
import ReactGA from "react-ga";
import { PDFViewer } from "@react-pdf/renderer";
import Restaurant from "./Contents/Restaurant";
import Login from "./Contents/Login"
import Registre from "./Contents/Registre";
import Reserva from "./Contents/Reserva";





class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      preferredLocale: "ca"
    };

  };


  changeLanguage = ({ currentTarget: { id } }) => {
    this.setState({
      preferredLocale: id
    });
  };


  useEffect = ()=>{
    ReactGA.initialize('UA-190717275-1');
    ReactGA.pageview('/');
    ReactGA.pageview('/Contact');

  }
  render() {


    return (
      
      <LocaleContext.Provider value={this.state.preferredLocale}>
        <Router>
          <div className="App">
          <Route exact path="/" render={() => <Navbar changeLanguage={this.changeLanguage} /> } />
          <Route exact path="/" render={() => <Home changeLanguage={this.changeLanguage} idioma={this.state.preferredLocale} /> } />
          <Route exact path="/" render={() => <Footer changeLanguage={this.changeLanguage} /> } />
          <Route exact path="/Contact" render={() => <Navbar changeLanguage={this.changeLanguage} /> } />
          <Route exact path="/Contact" render={() => <Contact changeLanguage={this.changeLanguage} /> } />
          <Route exact path="/Contact" render={() => <Footer changeLanguage={this.changeLanguage} /> } />
          <Route exact path="/Restaurant/:id" render={() => <Navbar changeLanguage={this.changeLanguage} /> } />
          <Route exact path="/Restaurant/:id" render={() => <Restaurant changeLanguage={this.changeLanguage} /> } />
          <Route exact path="/Restaurant/:id" render={() => <Footer changeLanguage={this.changeLanguage} /> } />
          <Route exact path="/Login" render={() => <Navbar changeLanguage={this.changeLanguage} /> } />
          <Route exact path="/Login" render={() => <Login changeLanguage={this.changeLanguage} /> } />
          <Route exact path="/Login" render={() => <Footer changeLanguage={this.changeLanguage} /> } />
          <Route exact path="/Registre" render={() => <Navbar changeLanguage={this.changeLanguage} /> } />
          <Route exact path="/Registre" render={() => <Registre changeLanguage={this.changeLanguage} /> } />
          <Route exact path="/Registre" render={() => <Footer changeLanguage={this.changeLanguage} /> } />
          <Route exact path="/Reserva/:id" render={() => <Navbar changeLanguage={this.changeLanguage} /> } />
          <Route exact path="/Reserva/:id" render={() => <Reserva changeLanguage={this.changeLanguage} /> } />
          <Route exact path="/Reserva/:id" render={() => <Footer changeLanguage={this.changeLanguage} /> } />
          </div>
        </Router>
      </LocaleContext.Provider>
    );
  }

}

export default App;
