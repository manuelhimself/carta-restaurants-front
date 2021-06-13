import React, { Component } from 'react';
import axios from 'axios';


class dataTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hits: [],

        };
    }

    componentDidMount() {
        const i = this.props.idEstabliment;
        this.setState({ isLoading: true });

        const url2 = 'https://api.restaurat.me/controller/reserves/tableHorari.php?id=' + i;
        axios.post(url2).then(response => response.data)
            .then((data) => {
                this.setState({ hits: data })
            })
    }

    render() {
        const { hits } = this.state;


        return (
            <div className="App">
                <div className="container">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Dia</th>
                                <th>Obertura</th>
                                <th>Tancament</th>
                            </tr>
                        </thead>
                        <tbody>{hits.map(function (item) {
                            return (
                                <tr>
                                    <td>{item.dia}</td>
                                    <td>{item.horari_obertura}</td>
                                    <td>{item.horari_tancament}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}


export default dataTable;