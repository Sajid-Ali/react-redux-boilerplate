import React, { Component } from 'react';
import { DatePicker } from 'antd';

class Home extends Component {
	static propTypes = {
	}

	static defaultProps = {
	}

	state = {
	}

	render() {
		return (
			<div>
				<h1>Home</h1>
				<input type="button" value="Add User" onClick={() => console.log('hello from button click!!!!')} />
				<DatePicker />
			</div>
		);
	}
}

export default Home;
