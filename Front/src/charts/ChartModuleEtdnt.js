import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Axios from "axios";

const ChartModuleEtdnt = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/absences/test/" + localStorage.getItem("user"))
      .then((res) => {
        console.log(res.data.data);

        var r1 = res.data.data.filter((elm) => elm.id_Module === 1);
        var r2 = res.data.data.filter((elm) => elm.id_Module === 2);
        var r3 = res.data.data.filter((elm) => elm.id_Module === 3);
        var r4 = res.data.data.filter((elm) => elm.id_Module === 4);
        var r5 = res.data.data.filter((elm) => elm.id_Module === 5);
        console.log("ziiiiiiiiiiiiiiiiiiiiz", r1.length, r2.length, r3.length, r4.length, r5.length);

        var m1 = r1.length;
        var m2 = r2.length;
        var m3 = r3.length;
        var m4 = r4.length;
        var m5 = r5.length;
        var tab = [
          { label: "java", count: m1, fill: "#8884d8" },
          { label: "Web", count: m2, fill: "#82ca9d" },
          { label: "Reseau", count: m3, fill: "#ffc658" },
          { label: "UML", count: m4, fill: "#ffc0cb" },
          { label: "TEC", count: m5, fill: "#888888" },
        ];
        setChartData(tab);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="border-gray-200 bg-white pr-4 py-0 sm:pr-6 pb-3">
        <h3 className="text-lg font-semibold leading-6 text-gray-900">Nombre d'absence par modules</h3>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill={chartData.map((data) => data.fill)} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartModuleEtdnt;
