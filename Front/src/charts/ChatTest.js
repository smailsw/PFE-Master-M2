import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { format, parseISO } from "date-fns";
import Axios from "axios";

const ChartTest = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/absences")
      .then((res) => {
        console.log("res.data", res.data.data);

        var tab = [
          { x: new Date(2020, 6, 1), y: 1 },
          { x: new Date(2020, 6, 2), y: 4 },
          { x: new Date(2020, 6, 3), y: 3 },
          { x: new Date(2020, 6, 4), y: 6 },
          { x: new Date(2020, 6, 5), y: 5 },
          { x: new Date(2020, 6, 6), y: 9 },
          { x: new Date(2020, 6, 7), y: 7 },
        ];
        setChartData(tab);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const formatXAxis = (tickItem) => {
    const formattedDate = format(tickItem, "dd MMM");
    const dayName = format(tickItem, "EEEE");

    return `${formattedDate} (${dayName})`;
  };

  return (
    <div>
      <div className="border-gray-200 bg-white pr-4 py-0 sm:pr-6 pb-3">
        <h3 className="text-lg font-semibold leading-6 text-gray-900">Variation de l'absence durant la semaine</h3>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" tickFormatter={formatXAxis} />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="y" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartTest;
