import React, { Component } from 'react';
// import API from './constants'; 
import $ from 'jquery';

import Driver from './Driver';
import ConstantsList from './Constants';

import { Col } from 'react-bootstrap'
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Table } from 'react-bootstrap';


class Season extends Component  {
    constructor(props) {
        super(props);


        this.state = {race: [],winnerOfYear:''};

    }

    componentDidMount() {
        this.SeasonList();
        this.WinnerOfYear();
        console.log('algo');

    }

    SeasonList() {
        //ConstantsList.API_URL
        return $.getJSON('http://ergast.com/api/f1/' + this.props.year + ".json")
            .then((data) => {
                this.setState({ race: data.MRData.RaceTable.Races });
            });
    }

    WinnerOfYear() {
        return $.getJSON('http://ergast.com/api/f1/' + this.props.year + "/driverStandings/1.json")
            .then((data) => {
                this.setState({ winnerOfYear: data.MRData.StandingsTable.StandingsLists[0].DriverStandings });
            });
    }

    render() {
        const races = this.state.race.map((item, i) => {
        const winnerDriver = (this.state.winnerOfYear[0].Driver.driverId) ? this.state.winnerOfYear[0].Driver.driverId : null ;
        //const winnerDriver ='hamilton';

            return (
                <tr>
                    <td>{i}</td>
                    <td>{item.raceName}</td>
                    <td>{item.Circuit.circuitName}</td>
                    <td><Driver winner={winnerDriver} item={item} key={item}/></td>
                </tr>
            );
        });

        // return <div id="layout-content" className="layout-content-wrapper">
        //     <div className="panel-list">{ races }</div>
        // </div>

            // return <div>
            //     <Grid>
            //         <Row className="show-grid">
            //             { races }
            //         </Row>
            //         </Grid>
            // </div>

        return <div>
            <Table striped bordered condensed hover>
                <thead>
                <tr>
                    <th># Round</th>
                    <th>Race Name</th>
                    <th>Circuit Name</th>
                    <th>Driver name</th>
                </tr>
                </thead>
                <tbody>

                    { races }

                </tbody>
            </Table>
        </div>
    }
}

export default Season;