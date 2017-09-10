import React, { Component } from 'react';
// import API from './constants'; 
import $ from 'jquery';

class Driver extends Component  {
    constructor(props) {
        super(props);


        this.state = {result: []};
    }

    componentDidMount() {
        this.DriverName();
    }

    DriverName() {
        let round = this.props.item.round;//cambiar por dinamico
        let year = this.props.item.season;
        return $.getJSON('http://ergast.com/api/f1/' + year + '/' + round +"/results/1.json")
            .then((data) => {
                this.setState({ result: data.MRData.RaceTable.Races[0].Results });
            });
    }


    render() {
        const races = this.state.result.map((item, i) => {

            return <div>
                <h1>{item.Driver.familyName}</h1>
                {/*<span>{item.Driver.driverId}</span>*/}
            </div>
        });

        return <div id="layout-content" className="layout-content-wrapper">
            <div className="panel-list">{ races }</div>
        </div>
    }
}

export default Driver;