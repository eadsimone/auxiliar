import React, { Component } from 'react';

import Season from './Season';

import { Button } from 'react-bootstrap';
import { Collapse } from 'react-bootstrap'
import { Well } from 'react-bootstrap';
import { PanelGroup } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';



class List extends Component  {
	constructor(props) {
	   	super(props);
	   	this.state = {
	   		years: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015],
	   	}

	};


	render( mountNode) {

        const wellStyles = {maxWidth: 800, margin: '0 auto 10px'};

        const buttonsInstance = (
			<div className="well" style={wellStyles}>
				<Button bsStyle="primary" bsSize="large" block>Block level button</Button>
				<Button bsSize="large" block>Block level button</Button>

				<div>
					<Button onClick={ ()=> this.setState({ open1: !this.state.open1 })}>
						click
					</Button>
					<Collapse in={this.state.open1}>
						<div>
							<Well>
								Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
								Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
							</Well>
						</div>
					</Collapse>
				</div>

				<div>
					<Button onClick={ ()=> this.setState({ open2: !this.state.open2 })}>
						click
					</Button>
					<Collapse in={this.state.open2}>
						<div>
							<Well>
								Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
								Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
							</Well>
						</div>
					</Collapse>
				</div>

			</div>

        );

    return (
			<div>
				<h1>List of F1 World Champions</h1>
				{/*{buttonsInstance}*/}


				<div>

				{
					this.state.years.map(function(year){
						// return <Season year={year} key={year}/>
					const panel = year;
                        return <PanelGroup>
							<Panel collapsible header={panel} eventKey="{year}">
								<Season year={year} key={year}/>
							</Panel>
						</PanelGroup>

					})
				}
				</div>
			</div>
		);
	}
}

export default List;