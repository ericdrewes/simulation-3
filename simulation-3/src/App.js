import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../src/components/Navbar'
import router from './router';
import './App.css';

class App extends Component {
	componentDidMount() {
		// axios.get(“/api/test”).then(response => {
		//   console.log(response);
		// });
	}
	render() {

		return (
	
		<div>
				<div className='nav'>
				<Navbar/>
				</div>
			<div className="App">{router}
			</div>
		</div>
	)
		
	}
}

export default App;
