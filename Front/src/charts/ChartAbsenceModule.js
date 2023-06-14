import React, { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const ChartAbsenceModule = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/absences")
      .then((res) => {
        const data = res.data.data;

        if (!Array.isArray(data)) {
          console.error("Data is not an array:", data);
          return;
        }

        const counts = [0, 0, 0, 0, 0];

        data.forEach((elm) => {
          if (!elm.hasOwnProperty("id_Module")) {
            console.error("Missing id_Module property:", elm);
            return;
          }

          counts[elm.id_Module - 1]++;
        });

        const labels = ["Java", "Web", "Reseau", "UML", "TEC"];
        const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ffc0cb", "#888888"];
        const chartData = labels.map((label, index) => ({ label, count: counts[index], fill: colors[index] }));

        setChartData(chartData);
      })
      .catch((error) => {
        console.log("Error retrieving data:", error);
      });
  }, []);

  return (
    <div>
              <div className=" border-gray-200 bg-white pr-4 py-0 sm:pr-6 pb-3">
          <h3 className="text-lg font-semibold leading-6 text-gray-900">
          Nombre d'absence par modules
          </h3>
        </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />
            <Bar key={chartData.label} dataKey="count" fill={chartData.fill} />
        </BarChart>
      </ResponsiveContainer>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
        {chartData.map((entry, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center", marginRight: "10px" }}>
            <div
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: entry.fill,
                marginRight: "5px",
              }}
            ></div>
            <span>{entry.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartAbsenceModule;
