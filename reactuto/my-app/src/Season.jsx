import React, { Component } from 'react';
import { API_URL } from './Constants'; 
import $ from 'jquery';

<<<<<<< HEAD
import Race from './Race';
=======
import Driver from './Driver';
import ConstantsList from './Constants';

import { Col } from 'react-bootstrap'
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
>>>>>>> 4b982725c126212e6328029e08396a854c2ffb91
import { Table } from 'react-bootstrap';


class Season extends Component  {
    constructor(props) {
        super(props);
<<<<<<< HEAD
        this.state = {race: [],winnerOfYear:''};
=======


        this.state = {race: [],winnerOfYear:''};

>>>>>>> 4b982725c126212e6328029e08396a854c2ffb91
    }

    componentDidMount() {
        this.SeasonList();
        this.WinnerOfYear();
<<<<<<< HEAD
    }

    SeasonList() {
        return $.getJSON( API_URL + this.props.year + ".json")
=======
        console.log('algo');

    }

    SeasonList() {
        //ConstantsList.API_URL
        return $.getJSON('http://ergast.com/api/f1/' + this.props.year + ".json")
>>>>>>> 4b982725c126212e6328029e08396a854c2ffb91
            .then((data) => {
                this.setState({ race: data.MRData.RaceTable.Races });
            });
    }

    WinnerOfYear() {
<<<<<<< HEAD
        return $.getJSON( API_URL + this.props.year + "/driverStandings/1.json")
=======
        return $.getJSON('http://ergast.com/api/f1/' + this.props.year + "/driverStandings/1.json")
>>>>>>> 4b982725c126212e6328029e08396a854c2ffb91
            .then((data) => {
                this.setState({ winnerOfYear: data.MRData.StandingsTable.StandingsLists[0].DriverStandings });
            });
    }

    render() {
<<<<<<< HEAD

        const races = this.state.race.map((item, i) => {
            const winnerDriver = (this.state.winnerOfYear && this.state.winnerOfYear[0].Driver.driverId) ? this.state.winnerOfYear[0].Driver.driverId : null ;
            return (
                <Race winnerOfYear={winnerDriver} raceItem={item} key={i}></Race>
            );
        });

        return (
            <div>
                <Table bordered condensed hover>
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
        )
=======
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
>>>>>>> 4b982725c126212e6328029e08396a854c2ffb91
    }
}

export default Season;