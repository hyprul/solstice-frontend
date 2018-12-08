import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

export default class PieChart extends Component {
	savings() {
		const temp_data = [];
		this.props.data.forEach(bill => {
			temp_data.unshift(bill.savings);
		});
		console.log(temp_data)
		return temp_data;
	}

	render() {
		console.log(this.props.data);
		const data = {
			labels: ["December", "January", "February","March", "April"],
			datasets: [
				{
					data: this.savings(),
					backgroundColor: ["#BAEAF7", "#102542", "#B80C09", "#36A2EB", "#01BAEF"],
					hoverBackgroundColor: ["#BAEAF7", "#102542", "#B80C09", "#36A2EB", "#01BAEF"]
				}
			]
		};
		return (
			<div>
				<h2>Savings</h2>
				<Pie
					data={data}
					width={200}
					height={200}
					options={{
						maintainAspectRatio: false
					}}
				/>
			</div>
		);
	}
}
