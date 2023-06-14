import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import axios from "axios";

const ChartEtudiant = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/etudiants")
      .then((res) => {
        const data = res.data.data;

        if (!Array.isArray(data)) {
          console.error("Data is not an array:", data);
          return;
        }

        const males = data.filter((elm) => elm.sexe !== "F");
        const females = data.filter((elm) => elm.sexe !== "H");

        const chartData = [
          { name: "Etudiantes", value: females.length, fill: "#F8765B" },
          { name: "Etudiants", value: males.length, fill: "#46BFBD" },
        ];

        setChartData(chartData);
        console.log("chartData", chartData);
      })
      .catch((error) => {
        console.log("Error retrieving data:", error);
      });
  }, []);

  return (
    <div className="db">
      <br />
      <div className=" border-gray-200 bg-white pr-4 py-0 sm:pr-6 pb-3">
          <h3 className="text-lg font-semibold leading-6 text-gray-900">
          Nombre totale des étudiants dans l'école
          </h3>
        </div>
      <ResponsiveContainer width="100%" height={500}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={200}
            label={(entry) => entry.name + ": (" + entry.value+")"}
          >
            {chartData.map((entry, index) => (
              <Cell key={index} fill={entry.fill} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <br />
    </div>
  );
};

export default ChartEtudiant;
