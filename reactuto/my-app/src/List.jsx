import React, { Component } from 'react';
import Season from './Season';
import { PanelGroup } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';

class List extends Component  {
	constructor(props) {
	   	super(props);
	   	this.state = {
	   		years: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015],
	   	}
	};

	render() {
	    return (
				<div>
					<h1>List of F1 World Champions</h1>
					<div>
					{
						this.state.years.map(function(year){
							const panel = year;
		                        return <PanelGroup key={year}>
									<Panel collapsible header={panel} eventKey="{year}">
										<Season year={year}/>
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