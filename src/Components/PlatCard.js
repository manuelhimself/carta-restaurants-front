import React, { Component } from 'react';

class PlatCard extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="col-md-4">
				<div className="card rounded border-0 h-100" key={this.props.plat.idPlat}>
					<img
						className="card-img-top"
						src={`https://admin.restaurat.me/images/plat/${this.props.plat.idPlat}.jpg`}
						onError={(e) => {
							e.target.onerror = null;
							e.target.src =
								'https://admin.restaurat.me/images/plat/default.jpg';
						}}
					></img>
					<div className="card-body p-4">
						<h5 className="card-title">{this.props.plat.nom}</h5>
						<p className="card-text">
							<span>{this.props.plat.descripcio}</span>
							<br />
							<span>Preu: {this.props.plat.preu} €</span>
						</p>
					</div>
				</div>
			</div>
		);
	}
}
export default PlatCard;
