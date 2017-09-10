import React, { Component } from 'react';
import { API_URL } from './Constants'; 
import $ from 'jquery';

class Race extends Component {

	constructor(props) {
        super(props);
        this.state = {driver: []};
    }

    componentDidMount() {
       this.DriverName();
    }

    DriverName() {
        let round = this.props.raceItem.round;//cambiar por dinamico
        let year = this.props.raceItem.season;
        return $.getJSON( API_URL + year + '/' + round +"/results/1.json")
            .then((data) => {
                this.setState({ driver: data.MRData.RaceTable.Races[0].Results[0].Driver });
            });
    }

    render() {
    	return (
			<tr className={(this.state.driver.driverId === this.props.winnerOfYear) ? 'highlight-champion' : ''}>
		        <td>{this.props.raceItem.round}</td>
		        <td>{this.props.raceItem.raceName}</td>
		        <td>{this.props.raceItem.Circuit.circuitName}</td>
		        <td>{this.state.driver.familyName}</td>
		    </tr>
    	)
    }
}

export default Race;