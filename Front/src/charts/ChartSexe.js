import React from "react";

import CanvasJSReact from "../canvasjs.react";
import Axios from "axios";
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class ChartSexe extends React.Component {
    state={ options : {
        title: {
            text: ""
        },
        data: [
        {
            // Change type to "doughnut", "line", "splineArea", etc.
            type: "splineArea",
            dataPoints: [         
                
            ]
        }
        ]
    }
}
        componentDidMount(){
            console.log('id user', localStorage.getItem('user'));
            Axios.get('http://localhost:5000/absences/').then(
                res =>{
                    console.log(res.data)
                    var r1= res.data.data.filter(elm => elm.id_Etudiant === 1 || elm.id_Etudiant === 3);
                    var r2 = res.data.data.filter(elm => elm.id_Etudiant === 2 ||  elm.id_Etudiant === 4);
                  
                    console.log('ziiiiiiiiiiiiiiiiiiiiz',r1.length, r2.length)

                    var m1= r1.length;
                    var m2 = r2.length;
                    
                    var tab = [{label:"Etudiants",y:m1}, {label:"Etudiantes",y:m2}]
                    this.setState({
                    options: { data: [{ dataPoints: tab }] }

                    })
                }
            )
            .catch(
                (err) =>{
                    console.log(err)
                }
            )

            
        }
	render() {
		
		return (
		<div>
            <b>Nombre d'absence par modules</b>
			<CanvasJSChart options = {this.state.options}
				 onRef={ref => this.chart = ref} 
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default ChartSexe;