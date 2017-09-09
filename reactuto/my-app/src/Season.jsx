import React, { Component } from 'react';
// import API from './constants'; 
import $ from 'jquery';

class Season extends Component  {
	constructor(props) {
	   	super(props);
	};

	componentWillMount() {
    	this.RacesList();
  	}

  	RacesList() {
	    return $.getJSON('http://ergast.com/api/f1/' + this.props.year + ".json")
	      .then((data) => {
	        this.setState({ races: data.MRData.RaceTable.Races });
	      });
  	}
	
	render() {
		return (
			<div>
				<h2>{this.props.year}</h2>
				<div>{this.state}</div>
			</div>
		)
	}
}

export default Season;