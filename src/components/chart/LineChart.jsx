import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./chart.css";

const LineChart = ({ userData }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) chartInstance.current.destroy();
    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(myChartRef, {
      type: "line",
      data: {
        labels: userData.map((row) => row.name),
        datasets: [
          {
            label: "Active Users",
            data: userData.map((row) => row.activeUser),
            fill: false,
            borderColor: "rgb(75,192,192)",
            borderWidth: 2,
          },
        ],
      },
      options: {
        aspectRatio: 4 / 1.2,
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="chart">
      <h3 className="chart-title">Active Users</h3>
      <canvas aspect ref={chartRef} />
    </div>
  );
};

export default LineChart;
