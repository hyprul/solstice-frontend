import React, { Component } from "react";



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
				
				

			</div>
		);
	}
}
