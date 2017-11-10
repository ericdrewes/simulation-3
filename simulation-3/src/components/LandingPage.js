import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { connect } from 'react-redux';
import { requestUser } from '../ducks/reducer';

class LandingPage extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.requestUser;
	}

	render() {
		console.log(this.props);
		return (
			<div>
				<h1>Hello World</h1>
				{this.props.user.id && <div>{this.props.user.id}</div>}
			</div>
		);
	}
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { requestUser })(LandingPage);
