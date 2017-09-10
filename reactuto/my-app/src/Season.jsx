import React, { Component } from 'react';
// import API from './constants'; 
import $ from 'jquery';

import Driver from './Driver';

import { Col } from 'react-bootstrap'
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Table } from 'react-bootstrap';


class Season extends Component  {
    constructor(props) {
        super(props);


        this.state = {race: []};
    }

    componentDidMount() {
        this.SeasonList();
    }

    SeasonList() {
        return $.getJSON('http://ergast.com/api/f1/' + this.props.year + ".json")
            .then((data) => {
                this.setState({ race: data.MRData.RaceTable.Races });
            });
    }

    render() {
        const races = this.state.race.map((item, i) => {

            // return <div>
            //     <h1>{item.raceName}</h1>
            //     <span>{item.Circuit.circuitName}</span>
            //     <Driver item={item} key={item}/>
            // </div>

            // return <div>
            //     <Col xs={12} md={4}><h1>{item.raceName}</h1></Col>
            //     <Col xs={6} md={4}> <span>{item.Circuit.circuitName}</span></Col>
            //     <Col xs={6} md={4}> <span><Driver item={item} key={item}/></span></Col>
            // </div>

            
            return <div>
                <tr>
                    <td>{i}</td>
                    <td>{item.raceName}</td>
                    <td>{item.Circuit.circuitName}</td>
                    <td><Driver item={item} key={item}/></td>
                </tr>
                </div>



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
                    <th>#</th>
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