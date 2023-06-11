import React from "react";
import { Pie } from "react-chartjs-2";
import axios from 'axios';

class ChartEtudiant extends React.Component {
  state = {
    dataPie: {
      labels: ['Etudiantes', 'Etudiants'],
      datasets: [
        {
          data: [20, 80, 100],
          backgroundColor: [
            "#F8765B",
            "#46BFBD",
          ],
          hoverBackgroundColor: [
            "#FF5A5E",
            "#5AD3D1"
          ]
        }
      ]
    }
  }
  componentDidMount() {

    axios.get('http://localhost:5000/etudiants')
      .then(res => {
        console.log("res.data",res.data.data);

        var m = res.data.data.filter(elm => elm.sexe !== 'F');
        var f = res.data.data.filter(elm => elm.sexe !== 'H')
        // console.log("etudiants "+m.length);
        // console.log("etudiantes "+f.length);
        var tab = [f.length, m.length]
        this.setState({
          dataPie: { datasets: [{ data: tab }] }


        })
      })
      .catch((error) => {
        console.log(error);
      })




  }




  render() {
    return (

      <div className="db">   
          <br/>
          <b>Nombre totale des étudiants dans l'école</b>
          <Pie data={this.state.dataPie} options={{ responsive: true }} />
           <br></br>
      </div>

    );
  }
}

export default ChartEtudiant;