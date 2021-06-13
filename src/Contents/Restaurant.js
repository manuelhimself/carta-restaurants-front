import React, { Component } from 'react';
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import { withRouter, useParams, useLocation } from 'react-router-dom';
import ProfileMap from '../Components/ProfileMap'
import SelectSeccio from '../Components/SelectSeccio'
import { TileLayer, Marker, MapContainer, Popup, CircleMarker, Tooltip } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";
import Table from '../Components/dataTable';


class Restaurant extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			establiment: {},
			establimentArr: [],
			poblacio: "",
			categories: "",
			usuari: sessionStorage.getItem('idUsuari')
		};
	}

	logUser(){
		if(this.state.usuari == null){
			alert('Es es necesari resgistar-se per reservar');
			window.location.href = '/';
		}
	}

	componentDidMount() {
		let i = this.props.match.params.id;
		axios.post('https://api.restaurat.me/controller/establiment/readById.php?id=' + i)
			.then(res => {
				const establiment = res.data;
				const establimentArr = [res.data];
				this.setState({ establiment });
				this.setState({ establimentArr });
				axios.post('https://api.restaurat.me/controller/poblacio/readById.php?id=' + this.state.establiment.poblacio_id).
					then((res) => {
						const poblacio = res.data.nom;
						this.setState({ poblacio });
						var length = this.state.establiment.categories.length;
						for (var i = 0; i < length; i++) {
							var idEstabliment = this.state.establiment.categories[i];
							axios.post('https://api.restaurat.me/controller/categoria/readById.php?id=' + idEstabliment).then((res) => {
								var categoria = res.data.nom;
								const categories = this.state.categories + categoria + ", ";
								this.setState({ categories });
							});
						}
					});
			})

	}

	render() {
		let i = this.props.match.params.id;
		return (
			<div>
				<div className="container" id="perfilContainer">
					<div className="card" id="perfilCard">
						<div className="wrapper row">
							<div className="col-md-6">
								<div className="nav" id="images">
									<div className="row" id="bigPic">
										<div className="image-upload col">
											<img
												id="pic1"
												src={
													'https://admin.restaurat.me/images/establiment/' +
													i +
													'-1.jpg'
												}
												onError={(e) => {
													e.target.onerror = null
													e.target.src = 'https://admin.restaurat.me/images/establiment/default.jpg'
												}}
												alt="Restaurant Image"
												className="imgTopEsquerreRodona"
											/>
										</div>
									</div>
									<div className="row" id="smallPics">
											<div className="image-upload col-md-3 col-6">
												<img
													id="pic2"
													src={
														'https://admin.restaurat.me/images/establiment/' +
														i +
														'-2.jpg'
													}
													onError={(e) => {
														e.target.onerror = null
														e.target.src = 'https://admin.restaurat.me/images/establiment/default.jpg'
													}}
													alt="Restaurant Image"
													className="imgBottomEsquerreRodona"
												/>
											</div>
											<div className="image-upload col-md-3 col-6">
												<img
													id="pic3"
													src={
														'https://admin.restaurat.me/images/establiment/' +
														i +
														'-3.jpg'
													}
													onError={(e) => {
														e.target.onerror = null
														e.target.src = 'https://admin.restaurat.me/images/establiment/default.jpg'
													}}
													alt="Restaurant Image"
												/>
											</div>
											<div className="image-upload col-md-3 col-6">
												<img
													id="pic4"
													src={
														'https://admin.restaurat.me/images/establiment/' +
														i +
														'-4.jpg'
													}
													onError={(e) => {
														e.target.onerror = null
														e.target.src = 'https://admin.restaurat.me/images/establiment/default.jpg'
													}}
													alt="Restaurant Image"
												/>
											</div>
											<div className="image-upload col-md-3 col-6">
												<img
													id="pic5"
													src={
														'https://admin.restaurat.me/images/establiment/' +
														i +
														'-5.jpg'
													}
													onError={(e) => {
														e.target.onerror = null
														e.target.src = 'https://admin.restaurat.me/images/establiment/default.jpg'
													}}
													alt="Restaurant Image"
												/>
											</div>
										</div>
								</div>
							</div>
							<div className="details col-md-6">
								<div className="establiment-title-div">
									<div className="col-md-12 d-flex">
										<h3 className="establiment-nom" id="nomEstabliment">
											{this.state.establiment.nom}
										</h3>
									</div>
								</div>
								<div className="establiment-description-div">
									<p className="establiment-descripcio" id="descripcioEstabliment">
										{this.state.establiment.descripcio}
									</p>
								</div>
								<br />
								<div className="establiment-altres-div col-md-12 d-flex">
									<li className="establiment-altres" id="altresEstabliment">
										<li>
											<FontAwesomeIcon icon={faMapMarker} /> {this.state.poblacio}
										</li>
										<li>
											<FontAwesomeIcon icon={faPhoneAlt} /> {this.state.establiment.telefon}
										</li>
										<li>
											<FontAwesomeIcon icon={faEnvelope} /> {this.state.establiment.correu_electronic}
										</li>
										<li>
											<FontAwesomeIcon icon={faUtensils} /> {this.state.categories}
										</li>
									</li>
								</div>
								<br />
								<div class="action col-md-12">
									<Link to={"/Reserva/" + i} className="text-decoration-none stretched-link"  >
										<button class="float-right btn realBtn mb-3" type="button" id="reservaBtn" onClick={()=>this.logUser()}>Reserva</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Table idEstabliment={i} />
				<div className="container">
					<ProfileMap establimentArr={this.state.establimentArr} />
				</div>
				<SelectSeccio idEstabliment={i} />
			</div>

		);

	}
}


export default withRouter(Restaurant);