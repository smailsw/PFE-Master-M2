import React from "react";

import CanvasJSReact from "../canvasjs.react";
import Axios from "axios";
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class ChartModuleEtdnt extends React.Component {
    state={ options : {
        title: {
            text: ""
        },
        data: [
        {
            // Change type to "doughnut", "line", "splineArea", etc.
            type: "line",
            dataPoints: [
                { label: "Java",  y: 1  },
                { label: "Web", y: 3  },
                { label: "Reseau", y: 4  },
                { label: "UML",  y: 0  },
                { label: "TEC",  y: 0  },
                
            ]
        }
        ]
    }
}
        componentDidMount(){
            console.log('id user', localStorage.getItem('user'));
            Axios.get('http://localhost:5000/absences/test/'+ localStorage.getItem('user')).then(
                res =>{
                    console.log(res.data.data)
                    var r1= res.data.data.filter(elm => elm.id_Module === 1);
                    var r2 = res.data.data.filter(elm => elm.id_Module === 2);
                    var r3 = res.data.data.filter(elm => elm.id_Module === 3);
                    var r4 = res.data.data.filter(elm => elm.id_Module === 4);
                    var r5 = res.data.data.filter(elm => elm.id_Module === 5);
                    console.log('ziiiiiiiiiiiiiiiiiiiiz',r1.length, r2.length, r3.length, r4.length, r5.length)

                    var m1= r1.length;
                    var m2 = r2.length;
                    var m3 = r3.length;
                    var m4 =r4.length;
                    var m5 =r5.length;
                    var tab = [{label:"java",y:m1}, {label:"Web",y:m2},{label:"Reseau",y:m3}, {label:"UML",y:m4}, {label:"TEC",y:m5}]
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
export default ChartModuleEtdnt;