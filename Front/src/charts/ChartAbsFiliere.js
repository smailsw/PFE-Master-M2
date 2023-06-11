import React from "react";
import { Pie } from "react-chartjs-2";
import axios from 'axios';

class ChartAbsFiliere extends React.Component {
  state = {
    dataPie: {
      labels: ['GED', 'GI','TM', 'GE','ISIL'],
      datasets: [
        {
          
          data: [20,40, 80, 100],
          backgroundColor: [
            "#F8765B",
            "#c45850",
            "#3e95cd",
            "#8e5ea2",
            "#3cba9f"
          ],
          hoverBackgroundColor: [
            "#F8765B",
            "#c45850",
            "#3e95cd",
            "#8e5ea2",
            "#3cba9f"
          ],
          
        }
      ]
    }
  }
  componentDidMount() {

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
          <h5 className="mt-5" style={{ textAlign: 'center' }}>Nombre d'absence par Filiere</h5>
          <Pie data={this.state.dataPie} options={{ responsive: true }} />
 


        <br></br>
      </div>

    );
  }
}

export default ChartAbsFiliere;