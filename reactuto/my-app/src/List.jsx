import React, { Component } from 'react';

import Season from './Season';

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
				<h1>My List</h1>
				<div>
				{
					this.state.years.map(function(year){
						return <Season year={year} key={year}/>
					})
				}
				</div>
			</div>
		);
	}
}

export default List;