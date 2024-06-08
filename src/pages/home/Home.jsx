import React from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const lineChartData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Sales",
      data: [65, 59, 80, 81, 56, 55],
      fill: false,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
    },
  ],
};

const barChartData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "Products Sold",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const pieChartData = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "Revenue Share",
      data: [300, 50, 100],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        <div className="shadow-lg p-4 rounded-lg bg-white transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold mb-2">Sales Over Time</h2>
          <Line data={lineChartData} />
        </div>
        <div className="shadow-lg p-4 rounded-lg bg-white transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold mb-2">Products Sold</h2>
          <Bar data={barChartData} />
        </div>

        <div className="shadow-lg p-4 rounded-lg bg-white transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold mb-2">Trending Category</h2>
          <Bar data={barChartData} />
        </div>

        <div className="shadow-lg p-4 rounded-lg bg-white transition-transform transform hover:scale-105">
          <h2 className="text-xl font-semibold mb-2">Revenue Share</h2>
          <Pie data={pieChartData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
