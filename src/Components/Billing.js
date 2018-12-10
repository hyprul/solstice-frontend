import React, { Component } from "react";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import CircularIndeterminate from "./ProgressBar";

export default class Billing extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: null
		};
	}

	componentDidMount() {
		fetch("https://solstice-backend.herokuapp.com/data")
			.then(response => response.json())
			.then(data => this.setState({ data }));
	}

	render() {
		const { data } = this.state;
		if (!data) {
			return (
				<div className="container">
					<h1 style={{ color: "pink" }}>Billing Page</h1>

					<CircularIndeterminate />
				</div>
			);
		} else {
			return (
				<div className="container">
					<h1>Billing Page</h1>
					<LineChart data={this.state.data} />
					<PieChart data={this.state.data} />
				</div>
			);
		}
	}
}
