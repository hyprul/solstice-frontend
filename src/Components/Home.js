import React, { Component } from 'react';
  import Button from '@material-ui/core/Button';


import Background from "../backgroundImages/solstice.jpg";

var backgroundStyle = {
	width: "100%",
	height: "100vh",
	backgroundSize: "cover",

	backgroundImage: `url(${Background})`
};

export default class Home extends Component {
	render() {
		return (
			<div style={backgroundStyle}>
				<Button variant="contained" color="primary">
      Hello World
    </Button>
			</div>
		);
	}
}
