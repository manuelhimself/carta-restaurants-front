import React, { Component } from 'react';
import axios from 'axios';
import PlatCard from './PlatCard'


class SelectSeccio extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			carta: {},
			seccions: [],
			idSeccio: {},
			plats: []
		};
	}

	s = React.createRef();

	componentDidMount() {
		axios.post(`https://api.restaurat.me/controller/carta/readCartaActivaByIdEstabliment.php?idEstabliment=` + this.props.idEstabliment)
			.then((res) => {
				this.setState({ carta: res.data })
				if(this.state.carta != null){
					axios.post("https://api.restaurat.me/controller/seccio/readByIdCarta.php?idCarta=" + this.state.carta.idCarta)
					.then((res) => {
						const seccions = res.data;
						this.setState({ seccions });
					});
				}
				
			});
	}

	componentDidUpdate(prevState) {
		if (prevState.idSeccio !== this.state.idSeccio) {
			this.consultaSeccio();
		}
	}

	obtenirSeccio = (s) => {
		this.componentDidUpdate(this.state);
		this.setState({ idSeccio: this.s.current.value });
	};

	consultaSeccio() {
		axios.post("https://api.restaurat.me/controller/plat/readByIdSeccio.php?idSeccio=" + this.state.idSeccio)
			.then((res) => {
				const plats = res.data;
				this.setState({ plats });
			})
	}

	render() {
		return (
			<div className="container">
				<div className="form-group col-md-3">
					<label>Seccions de la carta:</label>
					<select
						id="seccio"
						className="form-control"
						name="seccio"
						ref={this.s}
						onChange={this.obtenirSeccio}
					>
						<option value="-1">Selecciona</option>
						{this.state.seccions.map((seccio) => (
							<option key={seccio.idSeccio} value={seccio.idSeccio}>
								{seccio.nom}
							</option>
						))}
					</select>
				</div>
				<div className="row">
					{this.state.plats.map((plat) => (
						<PlatCard plat={plat} />
					))}
				</div>
			</div >
		);
	}
}

export default SelectSeccio;