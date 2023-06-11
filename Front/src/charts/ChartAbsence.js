import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import axios from 'axios';

class ChartAbsence extends React.Component {
  state = {
    dataPie: {
      labels: ['Java', 'Web','UML', 'Reseau', 'TEC'],
      datasets: [
        {
          data: [20,40, 80, 100],
          backgroundColor: [
            "#F8765B",
            "#46BFBD",
            "#949FB1",
            "#4D5360",
            "#FF5A5E",
          ],
          hoverBackgroundColor: [
            "#FF5A5E",
            "#5AD3D1",
            "#FF5A5E",
            "#5AD3D1",
            "#FF5A5E",
          ],
          
        }
      ]
    }
  }
  componentDidMount() {

    axios.get('http://localhost:5000/absences')
      .then(res => {
        console.log("res.data",res.data.data);

        var m1= res.data.data.filter(elm => elm.id_Module === 1);
        var m2 = res.data.data.filter(elm => elm.id_Module === 2);
        var m3 = res.data.data.filter(elm => elm.id_Module === 3);
        var m4 = res.data.data.filter(elm => elm.id_Module === 4);
        var m5 = res.data.data.filter(elm => elm.id_Module === 5);
        console.log('zz',m1.length, m2.length, m3.length, m4.length, m5.length)
        var tab = [m1.length, m2.length,m3.length, m4.length,  m5.length]
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

      <div style={{left:"20%"}} className="col-md-6" className="db">

        <MDBContainer>                
          <br/>
          <h5 className="mt-5" style={{ textAlign: 'center' }}>Nombre d'absence par module</h5>
          <Pie data={this.state.dataPie} options={{ responsive: true }} />
        </MDBContainer>


        <br></br>
      </div>

    );
  }
}

export default ChartAbsence;