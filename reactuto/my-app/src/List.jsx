import React, { Component } from 'react';
import Season from './Season';
import { PanelGroup } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';

class List extends Component  {
	constructor(props) {
	   	super(props);
	   	this.state = {
	   		years: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015],
	   		currentYear: 2005,
	   	}

	   	// This binding is necessary to make `this` work in the callback
    	this.onSelectPanel = this.onSelectPanel.bind(this);
	};

	onSelectPanel(year, e){
		e.preventDefault();
		/*if (e.currentTarget.className === 'collapsed') {
			this.setState({currentYear: year});
		}*/
	}

	render() {
	    return (
				<div>
					<h1>List of F1 World Champions</h1>
					<div>
						<PanelGroup>
						{
							this.state.years.map(function(year){
		                        return (
									<Panel collapsible header={year} eventKey={year} key={year} onSelect={this.onSelectPanel} >
										{
											//year === this.state.currentYear &&
												<Season year={year}/>
										}
									</Panel>
									)								
								}, this)
						}
						</PanelGroup>
					</div>
				</div>
			);
		}
}

export default List;