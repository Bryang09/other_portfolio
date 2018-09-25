import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

import "./Graph.css";

class Graph extends Component {
  state = {
    chartData: {
      labels: ["Udemy", "Team Treehouse", "YouTube", "Others"],
      datasets: [
        {
          label: "Where I Learned",
          data: [60, 20, 15, 5],
          backgroundColor: [
            "rgba(0, 97, 255, 1)",
            "rgba(95, 207, 128, 1)",
            "rgba(255, 0, 0, 1)",
            "rgba(0, 221, 255, 1)"
          ]
        }
      ]
    }
  };
  render() {
    return (
      <div className="Graph">
        <Pie
          data={this.state.chartData}
          height={200}
          options={{
            title: {
              display: true,
              text: "Where I Learned (In Percentages)",
              fontSize: 25,
              fontColor: "#fff5f5",
              fontFamily: "Montserrat"
            },
            legend: {
              display: true,
              position: "bottom",
              labels: {
                fontColor: "#fff5f5",
                fontFamily: "Montserrat"
              }
            },
            layout: {
              padding: {
                left: 0,
                right: 0,
                top: 20,
                bottotm: 20
              }
            },
            responsive: true,
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
}

export default Graph;
