import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import styles from "./Chart.module.css";

const data = [
  {
    name: "None",
    pv: 10,
    // amt: 3000
  },
  {
    name: "Low",
    pv: 3,
    // amt: 3000
  },
  {
    name: "Medium",
    pv: 10,
    // amt: 3000
  },
  {
    name: "High",
    pv: 6,
    // amt: 3000
  },
];

const Chart = () => {
  return (
    <BarChart
      width={350}
      height={200}
      data={data}
      margin={{
        top: 5,
        right: 70,
        left: 5,
        bottom: 0,
      }}
      className={styles['red-chart']}
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
      <Bar dataKey="pv" fill="#f0f2f5" barSize={35} radius={[5, 5, 0, 0]} />
    </BarChart>
  );
};

export default Chart;
