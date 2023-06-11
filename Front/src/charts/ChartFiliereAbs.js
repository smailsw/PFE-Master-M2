import React from "react";

import CanvasJSReact from "../canvasjs.react";
import Axios from "axios";
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class ChartFiliereAbs extends React.Component {
    state={ options : {
        title: {
            text: ""
        },
        data: [
        {
            // Change type to "doughnut", "line", "splineArea", etc.
            type: "line",
            dataPoints: [
                
                { label: "GED",  y: 1  },
                { label: "GI", y: 3  },
                { label: "TM", y: 4  },
                { label: "GE",  y: 0  },
                { label: "ISIL",  y: 0  },
                
            ]
        }
        ]
    }
}
        componentDidMount(){
            
            Axios.get('http://localhost:5000/absences')
                .then(res => {
                    console.log("res.data",res.data.data);

                     var f1= res.data.data.filter(elm => elm.id_Filiere === 1);
                        var f2 = res.data.data.filter(elm => elm.id_Filiere === 2);
                        var f3 = res.data.data.filter(elm => elm.id_Filiere === 3);
                        var f4 = res.data.data.filter(elm => elm.id_Filiere === 4);
                        var f5 = res.data.data.filter(elm => elm.id_Filiere === 5);
                    console.log('zZz',f1.length, f2.length,f3.length, f4.length, f5.length)
                    var r1= f1.length;
                    var r2 = f2.length;
                    var r3 = f3.length;
                    var r4 = f4.length;
                    var r5 = f5.length;
                    console.log('ziiiiiiiiiiiiiiiiiiiiz',r1, r2, r3, r4, r5)

                   
                    var tab = [{label:"GED",y:r1}, {label:"GI",y:r2},{label:"TM",y:r3}, {label:"GE",y:r4}, {label:"ISIL",y:r5}]
                    this.setState({
                    options: { data: [{ dataPoints: tab }] }
        })
      })
      .catch((error) => {
        console.log(error);
      })

            
        }
	render() {
		
		return (
		<div>
            <b>Nombre d'absence par Filières</b>
			<CanvasJSChart options = {this.state.options}
				 onRef={ref => this.chart = ref} 
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default ChartFiliereAbs;