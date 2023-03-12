import React from "react";
import {
  Chart as ChartJS,
  Legend,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart({ labels,data, label, text}) {
  const data3 = {
    labels: labels,
    datasets: [
      {
        label: label,
        data: data,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 225, 0.5)",
      },
    ],
  };

  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: text,
      },
    },
  };

  return (
    <Bar
      style={{
        backgroundColor: "white",
        maxHeight: "400px",
        maxWidth: "400px",
        padding: "15px",
        margin: "15px",
      }}
      options={options}
      data={data3}
    />
  );
}

export default BarChart;
