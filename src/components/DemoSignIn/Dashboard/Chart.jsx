import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import styles from "./Chart.module.css";

const Chart = (props) => {
  
  const { data, barWidth } = props;

  const isMobile = window.screen.width < 897;

  return (
    <BarChart
      width={400}
      height={isMobile ? 150 : 200}
      data={data}
      margin={{
        top: 5,
        right: 15,
        left: -20,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="7 7" />
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
      <Bar
        dataKey="pv"
        fill="#f0f2f5"
        barSize={barWidth}
        radius={[5, 5, 0, 0]}
      />
    </BarChart>
  );
};

export default Chart;
