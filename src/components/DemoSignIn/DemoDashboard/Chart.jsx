import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import styles from "./Chart.module.css";

const Chart = (props) => {
  let category = props.category,
    data,
    barWidth = 45;

  if (category === "priority") {
    data = [
      {
        name: "None",
        pv: 3,
      },
      {
        name: "Low",
        pv: 5,
      },
      {
        name: "Medium",
        pv: 7,
      },
      {
        name: "High",
        pv: 5,
      },
    ];
  } else if (category === "type") {
    data = [
      {
        name: "Bugs",
        pv: 11,
      },
      {
        name: "Features",
        pv: 7,
      },
    ];
    barWidth = 75;
  } else {
    data = [
      {
        name: "New",
        pv: 21,
      },
      {
        name: "Open",
        pv: 18,
      },
      {
        name: "In Progress",
        pv: 10,
      },
      {
        name: "Resolved",
        pv: 21,
      },
    ];
  }

  return (
    <BarChart
      width={300}
      height={200}
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: -20,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="name"
        stroke="#f0f2f5"
        tick={{ fill: "#f0f2f5", fontFamily: "Verdana", fontSize: 15 }}
      />
      <YAxis
        stroke="#f0f2f5"
        tick={{ fill: "#f0f2f5", fontFamily: "Verdana" }}
      />
      <Tooltip />
      <Bar dataKey="pv" fill="#f0f2f5" barSize={barWidth} radius={[5, 5, 0, 0]} />
    </BarChart>
  );
};

export default Chart;
