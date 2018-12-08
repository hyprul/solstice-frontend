import React, { Component } from "react";
import { Line } from "react-chartjs-2";

export default class LineChart extends Component {


	savings() {
		const temp_data = [];
		this.props.data.forEach(bill => {
			temp_data.unshift(bill.bill);
		});
		return temp_data
	}

	render() {
		const data = {
			labels: ["December", "January", "February", "March", "April"],
			datasets: [
				{
					label: "Savings($)",
					fill: false,
					lineTension: 0.1,
					backgroundColor: "rgba(75,192,192,0.4)",
					borderColor: "rgba(75,192,192,1)",
					borderCapStyle: "butt",
					borderDash: [],
					borderDashOffset: 0.0,
					borderJoinStyle: "miter",
					pointBorderColor: "rgba(75,192,192,1)",
					pointBackgroundColor: "#fff",
					pointBorderWidth: 1,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: "rgba(75,192,192,1)",
					pointHoverBorderColor: "rgba(220,220,220,1)",
					pointHoverBorderWidth: 2,
					pointRadius: 1,
					pointHitRadius: 10,
					data: this.savings()
				}
			]
		};
		console.log(this.props.data);


		return (
			<div>
				<h2>Billing History</h2>
				<Line
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
