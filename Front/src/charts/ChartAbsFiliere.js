import React, { useEffect, useState } from "react";
import axios from 'axios';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const ChartAbsFiliere = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/absences')
      .then(res => {
        console.log("res.data",res.data.data);

        var f1= res.data.data.filter(elm => elm.id_Filiere === 1);
        var f2 = res.data.data.filter(elm => elm.id_Filiere === 2);
        var f3 = res.data.data.filter(elm => elm.id_Filiere === 3);
        var f4 = res.data.data.filter(elm => elm.id_Filiere === 4);
        var f5 = res.data.data.filter(elm => elm.id_Filiere === 5);
        console.log('zZz',f1.length, f2.length,f3.length, f4.length, f5.length)
        var tab = [f1.length, f2.length,f3.length, f4.length, f5.length]
        setChartData(tab);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const COLORS = ["#F8765B", "#c45850", "#3e95cd", "#8e5ea2", "#3cba9f"];
  const FILIERE_NAMES = ['GED', 'GI', 'TM', 'GE', 'ISIL'];

  return (
    <div className="db">
      <br/>
      <div className="border-gray-200 bg-white pr-4 py-0 sm:pr-6 pb-3">
        <h3 className="text-lg font-semibold leading-6 text-gray-900">Nombre d'absence par Filiere</h3>
      </div>
      <ResponsiveContainer width="100%" height={500}>
        <PieChart>
          <Pie
            dataKey="value"
            data={chartData.map((value, index) => ({ name: FILIERE_NAMES[index], value }))}
            cx="50%"
            cy="50%"
            outerRadius={200}
            fill="#8884d8"
            label
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend layout="horizontal" align="center" verticalAlign="bottom" />
        </PieChart>
      </ResponsiveContainer>
      <br></br>
    </div>
  );
}

export default ChartAbsFiliere;
