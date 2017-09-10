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
<<<<<<< HEAD
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
=======
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
>>>>>>> 4b982725c126212e6328029e08396a854c2ffb91
				</div>
			);
		}
}

export default List;